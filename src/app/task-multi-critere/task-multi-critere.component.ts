import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task-multi-critere',
  templateUrl: './task-multi-critere.component.html',
  styleUrls: ['./task-multi-critere.component.css']
})
export class TaskMultiCritereComponent implements OnInit {

  criteriaChosen : string;
  criteria : string;
  finalCriteria : string;
  @Output() sendFinalCriteria = new EventEmitter<string>();
  showFormVariable : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  search(index : number){
    if(index==1)
      this.finalCriteria ="?"+this.criteriaChosen+"="+this.criteria;
    else if(index==2)
      this.finalCriteria="";
    this.sendFinalCriteria.emit(this.finalCriteria);

  }
  showForm(){
    if(this.showFormVariable)
      this.showFormVariable=false;
    else 
    this.showFormVariable=true;
  }
}
