import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user : User;
  isDataCorrect : boolean;
  listUsers : User[];

  constructor(private service : UsersService, private router : Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.service.getAllUsers().subscribe(
      (data : User[]) => this.listUsers = data
    );
  }

  connect(){
    this.service.getSpecificUser(this.user.username, this.user.password).subscribe(
      (data : User[]) => {
        if(data.length==0){
          this.isDataCorrect = false;
        } else {
          this.user = data[0];
          this.isDataCorrect = true;
          localStorage.setItem("userConnected",JSON.stringify(this.user));
          this.router.navigate(['/MyProfile']);
        }
       }
    );
  }

}
