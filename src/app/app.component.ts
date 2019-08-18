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
    //console.debug('marks: ',this.marks);
      if(this.marks>=35){
        this.mycolor="green";
      }else {
        this.mycolor="red";
      }
    }



}
