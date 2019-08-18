import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSS Dynamic update';
  marks:number = 71;
  mycolor:string = "";
  constructor() {
    if (this.marks >= 35) {
      this.mycolor = "green";
    } else {
      this.mycolor = "red";
    }
  }
    changeColor(){

    console.log('marks: ',this.marks);
      if(this.marks>=35){
        console.log('marks: Green',this.marks);
        this.mycolor="green";
      }else {
        console.log('marks: RED ',this.marks);
        this.mycolor="red";
      }
    }



}
