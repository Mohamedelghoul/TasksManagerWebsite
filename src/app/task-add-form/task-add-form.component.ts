import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../Model/Task';
import { User } from '../Model/User';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.css']
})
export class TaskAddFormComponent implements OnInit {


  @Input() user : User;
  task : Task;
  tasksList : Task[]
  addTaskRegisterForm : FormGroup;
  showFormVariable: boolean;
  @Output() sendTask = new EventEmitter<Task>();


  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.task = new Task();
    this.addTaskRegisterForm = new FormGroup({
      title : new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9]+$")]),
      description : new FormControl('',[Validators.required]),
      deadline : new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}-[0-9]{2}-[0-9]{4}$")])
    });
    this.service.getAllTasks().subscribe(
      data => this.task.id = data[data.length-1].id +1 
    );

  }

  addTask(){
    this.task.userId =this.user.id;
    this.task.status = "Not Done Yet";
    this.service.addTask(this.task).subscribe(
      () => {
        this.sendTask.emit(this.task);
        this.showFormVariable = false;
      }
    );
  }

  showForm(){
    if(this.showFormVariable)
      this.showFormVariable=false;
    else 
    this.showFormVariable=true;
  }

}
