import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  listUsers : User[];
  user : User;
  userAdded : boolean;
  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.user = new User();
    this.service.getAllUsers().subscribe(
      (data : User[]) => { this.listUsers = data; this.user.id = this.listUsers[this.listUsers.length -1].id +1 ;}
    );
  }

  addUser(){
    this.service.addUser(this.user).subscribe(
      () => this.userAdded = true
    );
    if(this.userAdded==null)
      this.userAdded = false;
    
  }
}
