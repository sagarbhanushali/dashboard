import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {DashboardService} from './services/dashboard.service';
import { Subscription } from 'rxjs/Subscription';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  pieChartData: any = [];
  pieChartColors = [
    'rgba(0, 128, 0, 0.8)',
    'rgba(255, 255, 0, 1)',
    'rgba(255, 0, 0, 1)',
  ];
  tableData: any = [];
  savedTableData: any = [];

  searchText = '';
  subscription: Subscription;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.buildPieChart(this.dashboardService.employeeData);
    this.buildTableData(this.dashboardService.employeeData);
  }

  buildPieChart(data: any) {
    let keys: any;
    if (data) {
      keys = Object.keys(data);
    }
    if (keys) {
      keys.forEach((key: any) => {
        this.pieChartData.push({
          'status': key,
          'count': data[key].count
        });
      });
    }
    return this.pieChartData;
  }

  buildTableData(data: any) {
    let keys: any;
    if (data) {
      keys = Object.keys(data);
    }

    keys.forEach((key: any) => {
      const array = data[key].data;
      this.tableData = this.tableData.concat(array);
    });
    this.savedTableData = JSON.parse(JSON.stringify(this.tableData));
    return (this.tableData);
  }

  getRowClasses(item: any, event: any) {
    const classes = [];
    if (item) {
      if (item.status === 'red') {
        classes.push('bg-danger');
      } else if (item.status === 'yellow') {
        classes.push('bg-warning');
      } else {
        classes.push('bg-success');
      }
    }
    return classes.join(' ');
  }

  /**
     * On search text change, update resource table for new filter criteria
     * @param event Input textbox change event
     */
    onSearchTextChange(searchTerm) {
      const searchText = searchTerm.trim();
      this.filterResults(searchText);
  }

  filterResults(searchTerm?: any) {
    if (searchTerm) {
      this.tableData = this.savedTableData.filter((obj: any) => {
        return ((obj.name.indexOf(searchTerm) !== -1) || (obj.email.indexOf(searchTerm) !== -1) || (obj.status.indexOf(searchTerm) !== -1));
      });
    } else {
      this.tableData = JSON.parse(JSON.stringify(this.savedTableData));
    }
  }

  ngAfterViewInit() {
    this.dashboardService.getPieChart('pie-chart', this.pieChartData, this.pieChartColors);
    this.dashboardService.getLinechart('line-chart');
  }

}
