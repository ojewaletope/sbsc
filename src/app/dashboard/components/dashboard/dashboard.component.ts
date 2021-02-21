import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../../../models/dataModels";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: UserInterface[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
