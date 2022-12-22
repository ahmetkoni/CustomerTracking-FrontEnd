import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { DashboardServiceService } from 'src/app/services/dashboard.service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData:number;
  investData:number;
  foreignInvestData:number;
  isChartReady = false
  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit(): void {

   
   this.GetInvest();
   this.countCustomer();
   this.GetForeignInvest();
   this.PieChart();
 
  
  }
  
  GetInvest(){
    this.dashboardService.getInvest().subscribe(response => {
      if (response.success) {
        console.log(response)
        this.investData = response.data
      }else{
        console.log(response)
      }
    },errorResponse =>{
      console.log(errorResponse.error.message)
    })
  }

  GetForeignInvest(){
    this.dashboardService.getForeignInvest().subscribe(response => {
      if (response.success) {
        console.log(response)
        this.foreignInvestData = response.data
       
      }else{
        console.log(response)
      }
    },errorResponse =>{
      console.log(errorResponse.error.message)
    })
  }

  countCustomer(){
    this.dashboardService.getCount().subscribe(response => {
      if (response.success) {
        console.log(response)
        this.dashboardData = response.data
      }else{
        console.log(response)
      }
    },errorResponse =>{
      console.log(errorResponse.error.message)
    })
  }


  PieChart(){
    if (this.dashboardData == undefined && this.investData == undefined && this.foreignInvestData == undefined) {
      setTimeout(() => {
        this.PieChart()
      }, 1000);
      
    }
    this.isChartReady = true
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: this.investData, name: 'Dashboard Data' },
            { value: this.foreignInvestData, name: 'Foreign Invest' },
            { value: this.investData, name: 'Invest' },
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);

  }



}


