import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    return this.dashboardService.getData().subscribe(data => {
      console.log(data);
      this.data = data[0];
    }, err => {
      console.log(err);
    })
  }
}
