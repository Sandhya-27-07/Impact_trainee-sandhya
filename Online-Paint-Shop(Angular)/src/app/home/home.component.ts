import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimages:string;
  myimages1:string;
  myimages2:string;
  myimages3:string;
  myimages4:string;
  constructor() {
    this.myimages="/assets/image/11.jpg";
    this.myimages1="/assets/image/jt.jpg";
    this.myimages2="/assets/image/ratings.jpg";
    this.myimages3="/assets/image/robo.jpg";
    this.myimages4="/assets/image/customers.jpg";
   }

  ngOnInit() {
  }

}
