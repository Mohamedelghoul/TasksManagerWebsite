import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Task } from '../Model/Task';
import { User } from '../Model/User';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  user : User;
  tasksList : Task[];

  constructor(private service : UsersService) { }

  ngOnInit(): void {

 
    if(localStorage.getItem("userConnected")!=null)
      this.user = JSON.parse(localStorage.getItem("userConnected"));
    this.service.getAllTasksByUserId(this.user.id).subscribe(
      data => this.tasksList = data
    );

    
  }
  addTask(t : Task){
    this.tasksList.push(t);
  }

  search(criteria : string){
    if(criteria==""){
      this.service.getAllTasksByUserId(this.user.id).subscribe(
        data => this.tasksList = data

      );
    } else {
      criteria = criteria + "&userId=" + this.user.id;
      this.service.getTasksByCriteria(criteria).subscribe(
        data => this.tasksList = data
      );
    }

  }
}
