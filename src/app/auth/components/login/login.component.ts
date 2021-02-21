import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2'
import {UserInterface} from "../../../models/dataModels";
import {FormBuilder, FormGroup} from "@angular/forms";
import {init} from "protractor/built/launcher";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserInterface;
  userForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(): void {
    this.userForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  login(user) {
    const payload = user.value;
    if (!payload.username) {
      return swal.fire('Error', 'Username is required', 'error')
    }
    if (!payload.password) {
      return swal.fire('Error', 'Password is required', 'error')
    }
    localStorage.setItem('user', payload);
    return this.authService.getData().subscribe(data => {
      if (data) {
        this.router.navigateByUrl('/home');
      }
    }, err => {
      console.log(err);
    })
  }
}
