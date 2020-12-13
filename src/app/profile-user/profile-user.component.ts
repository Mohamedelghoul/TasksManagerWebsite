import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UsersService } from '../Shared/users.service';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  user : User;
  showEditFormVariable : boolean;

  constructor(private service : UsersService, private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("userConnected")!=null){
      this.user = JSON.parse(localStorage.getItem("userConnected"));
    }
  }

  deleteUser(){
    this.service.deleteUserById(this.user.id).subscribe(
      () =>{
        localStorage.removeItem("userConnected");
        this.router.navigate(["Home"]);
      } 
    );
  }

  modifyUser(){
    this.user.lastName="sdsdfsf";
    this.service.modifyUser(this.user).subscribe();
  }

  showEditUserForm(){
    if(this.showEditFormVariable)
    this.showEditFormVariable=false;
  else 
  this.showEditFormVariable=true;
  }
}
