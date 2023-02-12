import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data: Array<any>;

  constructor(private JSONPlacheholder:JSONPlaceholderService){
    this.data = new Array<any>()
   }
   
   ngOnInit(){
    this.getDataFromAPI();    
   }

  getDataFromAPI(){
    this.JSONPlacheholder.getData().subscribe((data) => {
      data.forEach( function( d:any ){
      d.bg = 'https://source.unsplash.com/random/' + Math.floor(Math.random() * 100000000) + 0;
      let category = ['TRAVEL', 'LIFESTYLE', 'BUSINESS', 'FOOD', 'WORK'];
      d.category = category[Math.floor(Math.random() * 4) + 0];
      });
    this.data = data;
    })   
  }

}
