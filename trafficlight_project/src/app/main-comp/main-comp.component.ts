import { Component } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent {
  img_url:string="assets/images/red_img.jpg";

  vid_url:string="assets/images/drive2.png";
  msg:string="";



  red_fun(){
    this.img_url="assets/images/red_img.jpg";
    this.red_img();
    this.msg="  STOP  ";

  }
  green_fun(){
    this.img_url="assets/images/green_img.jpg";
    this.green_img();
    this.msg="  GO";

  }
  yellow_fun(){
    this.img_url="assets/images/yellow_img.jpg";
    this.yellow_img();
    this.msg="GET READY";

  }
  red_img(){
         this.vid_url="assets/images/drive2.png";
  }
  green_img(){
    this.vid_url="assets/images/start.gif";
  }
  yellow_img(){
    this.vid_url="assets/images/stop.gif";
  }
  s:boolean=true;
  timer:number=0;
  main1(){

      setTimeout(() => {
        this.red_fun();

      },this.timer+2000);
      setTimeout(() => {
        this.yellow_fun();
      },this.timer+4000);
      setTimeout(() => {
        this.green_fun();
      },this.timer+6000);
      setTimeout(() => {
        this.main1();

      }, this.timer+6000);

  }

}
