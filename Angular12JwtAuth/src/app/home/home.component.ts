import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Chart, registerables } from 'chart.js';

import { User } from '../constants/user';
import { Transaction } from '../constants/transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content?: string;
  user: User = new User("","",0,"");
  pieChart : any = [];
  pieLables : any = [];
  barChart : any = [];
  barLables : any = [];
  
  transaction : Transaction =new Transaction(0,"","","");

  constructor(private userService: UserService) {
    Chart.register(...registerables);
  }

 
  ngOnInit(): void {

    // const customjs = document.createElement('script');
    // customjs.src = 'assets/js/custom.js'
    // customjs.type = 'text/javascript';
    // document.getElementsByTagName('body')[0].appendChild(customjs);

    this.pieChart = new Chart('pie-canvas', {
      type:'pie',
      data: {
        labels: ['Jun 2021', 'July 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021'],
        datasets: [{
          label: 'My First Dataset',
          data: [10, 15, 20, 45, 20],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            // 'rgba(255, 159, 64)'
          ],
          hoverOffset: 4
        }]
      }
    })

    this.barChart = new Chart('bar-canvas', {
      type:'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Monthly Users, 2021',
          data: [5, 30, 80, 50, 56, 55, 40, 90, 101, 101, 120, 180],
          backgroundColor: [
            'rgba(5, 97, 217)',            
          ],
          borderColor: [
            // 'rgba(0,255,0)',
          ],
          borderWidth: 1
        }]
      }
    })
    // this.userService.getPublicContent().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }
}