import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';

import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    
  };
  public pieChartLabels = [ [  'Sales' ], [ 'top Sales'], ['Mail Sales'] ];
  public pieChartDatasets = [ {
   data: [ 2023, 2022, 2021 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
