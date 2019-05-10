import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Injectable()
export class DashboardService {

  employeeData: any = {
    'green': {
      'data': [
        {
          'name': 'smith',
          'id': 'bsjabsjas',
          'status': 'green',
          'email': 'smith@gmail.com'
        },
        {
          'name': 'sam',
          'id': 'bsjabsjas',
          'status': 'green',
          'email': 'sam@gmail.com'
        },
        {
          'name': 'simran',
          'id': 'bsjabsjas',
          'status': 'green',
          'email': 'simran@gmail.com'
        },
        {
          'name': 'john',
          'id': 'bsjabsjas',
          'status': 'green',
          'email': 'john@gmail.com'
        },
        {
          'name': 'james',
          'id': 'bsjabsjas',
          'status': 'green',
          'email': 'james@gmail.com'
        },
        {
          'name': 'jimmy',
          'id': 'bsjabsjas',
          'status': 'green',
          'email': 'jimmy@gmail.com'
        }
      ], 'count': 6
    },
    'yellow': {
      'data': [
        {
          'name': 'smith',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'smith@gmail.com'
        },
        {
          'name': 'sam',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'sam@gmail.com'
        },
        {
          'name': 'simran',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'simran@gmail.com'
        },
        {
          'name': 'sam',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'sam@gmail.com'
        },
        {
          'name': 'simran',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'simran@gmail.com'
        },
        {
          'name': 'john',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'john@gmail.com'
        },
        {
          'name': 'james',
          'id': 'bsjabsjas',
          'status': 'yellow',
          'email': 'james@gmail.com'
        }
      ], 'count': 7
    },
    'red': {
      'data': [
        {
          'name': 'smith',
          'id': 'bsjabsjas',
          'status': 'red',
          'email': 'smith@gmail.com'
        },
        {
          'name': 'sam',
          'id': 'bsjabsjas',
          'status': 'red',
          'email': 'sam@gmail.com'
        },
        {
          'name': 'simran',
          'id': 'bsjabsjas',
          'status': 'red',
          'email': 'simran@gmail.com'
        },
        {
          'name': 'james',
          'id': 'bsjabsjas',
          'status': 'red',
          'email': 'james@gmail.com'
        },
      ], 'count': 4
    },
  };

  constructor() { }

  // Create pie chart

  getPieChart(id, data, colors?: any) {
    // Create chart instance
    const chart = am4core.create(id, am4charts.PieChart);

    // Add data
    chart.data = data;

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = 'status';
    pieSeries.dataFields.value = 'count';

    // to display input colors
    if (colors && colors.length) {
      const colorList = colors.map(item => am4core.color(item));
      pieSeries.colors.list = colorList;
    }
  }

  getLinechart(id) {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create(id, am4charts.XYChart);

    // Add data
    chart.data = [
      {
        'date': new Date(2018, 0, 1, 0),
        'green': 10,
        'yellow': 200,
        'red': 250
      }, {
        'date': new Date(2018, 1, 1, 0),
        'green': 120,
        'yellow': 220,
        'red': 300
      }, {
        'date': new Date(2018, 2, 1, 0),
        'green': 80,
        'yellow': 180,
        'red': 200
      }, {
        'date': new Date(2018, 3, 1, 0),
        'green': 150,
        'yellow': 220,
        'red': 100
      }, {
        'date': new Date(2018, 4, 1, 0),
        'green': 90,
        'yellow': 350,
        'red': 340
      }, {
        'date': new Date(2018, 5, 1, 0),
        'green': 190,
        'yellow': 240,
        'red': 220
      }, {
        'date': new Date(2018, 6, 1, 0),
        'green': 80,
        'yellow': 300,
        'red': 270
      }, {
        'date': new Date(2018, 7, 1, 0),
        'green': 200,
        'yellow': 362,
        'red': 400
      }, {
        'date': new Date(2018, 8, 1, 0),
        'green': 280,
        'yellow': 150,
        'red': 80
      }, {
        'date': new Date(2018, 9, 1, 0),
        'green': 350,
        'yellow': 250,
        'red': 150
      }, {
        'date': new Date(2018, 10, 1, 0),
        'green': 320,
        'yellow': 290,
        'red': 270
      }];

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 10;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.line.opacity = 0;
    dateAxis.renderer.grid.template.strokeOpacity = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    function createSeries(field, name, color) {
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = 'date';
      series.name = name;
      series.tooltipText = '{name}: [b]{valueY}[/]';
      series.strokeWidth = 3;
      series.fillOpacity = 0.1;

      const bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = am4core.color(color);
      bullet.circle.strokeWidth = 2;
      bullet.fill = am4core.color(color);
    }
    createSeries('green', 'Green', 'rgba(0, 128, 0, 0.8)');
    createSeries('yellow', 'Yellow', 'rgba(255, 255, 0, 1)');
    createSeries('red', 'Red', 'rgba(255, 0, 0, 1)');

    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
  }




}
