import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;
  @Input() backgroundColor: string;
  @Input() cardTitle: string
  constructor() { }

  ngOnInit(): void {
  }

}
