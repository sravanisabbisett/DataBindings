import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl="";
  url="";

  ngOnInit():void{
    this.title="Hello From BridgeLabz"
    this.imgUrl="../assets/BL_logo_square_jpg.jpg"
    this.url="https://www.bridgelabz.com"
  }

  onClick($event:any){
    console.log($event);
    window.open(this.url,"_blank");
  }

  
}
