import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {path :'', redirectTo : '/Home', pathMatch : 'full'},
  {path : 'Home', component : HomeComponent},
  {path : 'SignUp', component : SignUpComponent},
  {path : 'SignIn', component : SignInComponent},
  {path : 'Contact-Us', component : ContactUsComponent},
  {path : 'MyProfile', component : ProfileUserComponent, canActivate : [AuthGard]},
  {path : 'MyTasks', component : TasksComponent, canActivate : [AuthGard]},
  {path : 'MyTasks/Detail/:id',component : TaskInfoComponent, canActivate : [AuthGard]},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
