import { Component, OnInit } from '@angular/core';
import { User } from './Model/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularMiniProject';
  user : User;

  constructor(){}
  ngOnInit(): void {

  }

  loginState(){
    if(localStorage.getItem("userConnected")!=null){
      this.user = JSON.parse(localStorage.getItem("userConnected"));
      return true;
    }   
    else 
      return false;
  }

  logOut(){
    localStorage.removeItem("userConnected");
  }
}
