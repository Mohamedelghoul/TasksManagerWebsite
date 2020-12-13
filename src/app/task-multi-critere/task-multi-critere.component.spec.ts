import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMultiCritereComponent } from './task-multi-critere.component';

describe('TaskMultiCritereComponent', () => {
  let component: TaskMultiCritereComponent;
  let fixture: ComponentFixture<TaskMultiCritereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskMultiCritereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMultiCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
