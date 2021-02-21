import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2'
import {UserInterface} from "../../../models/dataModels";
import {FormBuilder, FormGroup} from "@angular/forms";
import {init} from "protractor/built/launcher";

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
    private formBuilder: FormBuilder
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
    this.router.navigate(['/home/dashboard']);
  }
}
