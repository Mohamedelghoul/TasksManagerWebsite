import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { User } from '../Model/User';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  @Input() user : User;
  @Output() hideEditForm = new EventEmitter<boolean>();

  constructor(private service : UsersService) { }

  ngOnInit(): void {
  }

  editUser(){
    this.service.modifyUser(this.user).subscribe(
      () => {
        this.hideEditForm.emit(false);
        localStorage.setItem("userConnected",JSON.stringify(this.user));
      }
    );
    
  }

}
