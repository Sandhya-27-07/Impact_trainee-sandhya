import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  img1:string;
  img2:string;
  img3:string;
  img4:string;
  constructor() {
    this.img1="/assets/image/pro1.jpeg";
    this.img2="/assets/image/violet.jpeg";
    this.img3="/assets/image/pro5.jpeg";
    this.img4="/assets/image/pro4.webp";
   }
     
  ngOnInit() {
  }

}
