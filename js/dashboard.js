(function($) {
  'use strict';

  if($("#dashboard-radar-graph").length){
    window.chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };
    var color = Chart.helpers.color;
    var config = {
      type: 'radar',
      data: {
        labels: [
          [""],
          [""], "", ["", ""], "", "", ""
        ],
        datasets: [{
          label: "My First dataset",
          backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
          borderColor: window.chartColors.blue,
          pointBackgroundColor: window.chartColors.blue,
          data: [65, 56, 17, 57, 32, 55, 34, 79]
        }, {
          label: "My Second dataset",
          backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
          borderColor: window.chartColors.red,
          pointBackgroundColor: window.chartColors.red,
          data: [23, 18, 68, 56, 23, 34, 76, 80]
        }, ]
      },
      options: {
        legend: {
          display: false,
          position: 'top',
        }
      }
    };
    window.onload = function() {
      window.myRadar = new Chart(document.getElementById("dashboard-radar-graph"), config);
    };
  }

  if ($("#dash-bar-chart").length) {
    var dashboardBarChartCanvas = $("#dash-bar-chart").get(0).getContext("2d");
    var dashboardBarChart = new Chart(dashboardBarChartCanvas, {
      type: 'bar',
      data: {
        labels: ["3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar"],
        datasets: [{
            label: 'item 1',
            data: [80, 50, 27, 15, 65, 35],
            backgroundColor: '#fe763a'
          },
          {
            label: 'item 2',
            data: [35, 15, 45, 17, 20, 50],
            backgroundColor: '#66bb6a'
          },
          {
            label: 'item 3',
            data: [12, 74, 65, 29, 35, 60],
            backgroundColor: '#448aff'
          },
          {
            label: 'item 4',
            data: [24, 57, 50, 12, 3, 17],
            backgroundColor: '#fed23a'
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: false,
        barValueSpacing: 10,
        scales: {
          xAxes: [{
            barPercentage: 0.5,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgb(247,248,249)",
            },
            ticks: {
              min: 0,
              stepSize: 23,
              max: 90
            }
          }]
        }
      }
    });
    $("#dashboard-chart-legend").html(dashboardBarChart.generateLegend());
  }

  if ($(".demo-sparkline").length) {
    $(".demo-sparkline").sparkline('html', {
      enableTagOptions: true,
      width: '100%',
      barWidth: 2,
      height: '30px',
      fillColor: false
    });
  }

})(jQuery);