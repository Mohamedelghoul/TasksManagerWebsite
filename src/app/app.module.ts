import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskAddFormComponent } from './task-add-form/task-add-form.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskEditFormComponent } from './task-edit-form/task-edit-form.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskMultiCritereComponent } from './task-multi-critere/task-multi-critere.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ProfileUserComponent,
    HomeComponent,
    TasksComponent,
    TaskCardComponent,
    TaskAddFormComponent,
    TaskInfoComponent,
    TaskEditFormComponent,
    EditUserFormComponent,
    ContactUsComponent,
    NotFoundComponent,
    TaskMultiCritereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
