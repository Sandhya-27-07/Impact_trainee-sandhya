import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 img1:string;
 img2:string;
 img3:string;
 img4:string;
 img5:string;
 img6:string;
 img7:string;
 img8:string;
 img9:string;
 img10:string;
 img11:string;
 img12:string;
  constructor() {
    this.img1="/assets/image/pro1.jpeg";
    this.img2="/assets/image/violet.jpeg";
    this.img3="/assets/image/pro5.jpeg";
    this.img4="/assets/image/pro4.webp";
    this.img5="/assets/image/pro2.jpeg";
    this.img6="/assets/image/pro6.jpeg";
    this.img7="/assets/image/ss4.png";
    this.img8="/assets/image/pro9.jpeg";
    this.img9="/assets/image/pp10.png";
    this.img10="/assets/image/pp14.png";
    this.img11="/assets/image/pp17.png";
    this.img12="/assets/image/pp15.png";
    

   }

  ngOnInit() {
  }

}
