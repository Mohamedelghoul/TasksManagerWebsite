import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../Model/Task';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {
  @Input()task : Task;
  EditTaskRegisterForm : FormGroup;
  @Input() chosenTaskId : number;
  @Output() hideEditForm = new EventEmitter<boolean>(); 
 


  constructor(private service : UsersService, private router : Router) { }

  ngOnInit(): void {

    console.log(this.task);
    this.EditTaskRegisterForm = new FormGroup({
      title : new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9]+$")]),
      description : new FormControl('',[Validators.required]),
      deadline : new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}-[0-9]{2}-[0-9]{4}$")])
    });
  }

  editTask(){
    this.service.modifyTask(this.task).subscribe(
      () => {
        this.hideEditForm.emit(false);
      });

    }
}
