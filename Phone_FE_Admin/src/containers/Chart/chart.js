import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


import "./chart.css";
const Chart = (props) => {
  const data = [
    { y: 2426319.35, color: 'rgb(124, 181, 236)' },
    { y: 111314.79, color: 'rgb(124, 181, 236)' },
    { y: 5928.16, color: 'rgb(124, 181, 236)' },
    { y: 558.34, color: 'rgb(124, 181, 236)' }
  ];
  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }
  const chartOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
      style: {
        display: 'none'
      }
    },
    xAxis: {
      categories: ['11','22','33','44'],
      labels: {
        style: {
          'font-size': '0.875rem',
          'color': '#333333'
        }
      }
    },
    tooltip: {
      pointFormat: ''
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        showInLegend: false,
        data: data,
        dataLabels: {
          enabled: true,
        }
      }
    ]
  };
    return (
      <div className='my-chart'>
        <h2 className='chart-title'>Total Chart</h2>
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
      </div>
    )
}

export default Chart