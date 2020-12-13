import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../Model/Task';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {

  chosenTaskId : number;
  task : Task;
  showFormVariable: boolean;

  constructor(private serviceRoot : ActivatedRoute, private service : UsersService, private router : Router) { }

  ngOnInit(): void {
    this.task = new Task();
    this.chosenTaskId = this.serviceRoot.snapshot.params.id;
    this.service.getTaskById(this.chosenTaskId).subscribe(
      t => this.task = t
    );
  }

  deleteTask(){
    this.service.deleteTaskById(this.chosenTaskId).subscribe(
      () => this.router.navigate(["MyTasks"])
    );
  }

  showForm(){
    if(this.showFormVariable)
      this.showFormVariable=false;
    else 
    this.showFormVariable=true;
  }

  makeTaskDoneUndone(){
    if(this.task.status=="Not Done Yet")
      this.task.status = "Done";
    else 
      this.task.status = "Not Done Yet";

    this.service.modifyTask(this.task).subscribe();
  }

}
