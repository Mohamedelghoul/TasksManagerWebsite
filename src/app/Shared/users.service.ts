import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Model/Task';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS_URL ='http://localhost:3000/Users/';
  TASKS_URL ='http://localhost:3000/Tasks/';
  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.USERS_URL);
  }

  addUser(u : User){
    return this.http.post(this.USERS_URL,u);
  }

  getSpecificUser(username : string, password : string){
    return this.http.get<User[]>(this.USERS_URL+"?username="+username+"&password="+password);
  }

  modifyUser(user : User){
    return this.http.put(this.USERS_URL+user.id,user);
  }

  getUserById(id : number){
    return this.http.get<User>(this.USERS_URL+id)
  }

  deleteUserById(id : number){
    return this.http.delete(this.USERS_URL+id);
  }

  getAllTasks(){
    return this.http.get<Task[]>(this.TASKS_URL);
  }

  getAllTasksByUserId(userId : number) : Observable<Task[]>{
    return this.http.get<Task[]>(this.TASKS_URL+"?userId="+userId);
  }

  addTask(t : Task){
    return this.http.post(this.TASKS_URL,t);
  }

  getTaskById(id : number){
    return this.http.get<Task>(this.TASKS_URL+id);
  }

  deleteTaskById(id : number){
    return this.http.delete(this.TASKS_URL+id);
  }

  modifyTask(task : Task){
    return this.http.put(this.TASKS_URL+task.id,task);
  }

  getTasksByCriteria(criteria : string){
    return this.http.get<Task[]>(this.TASKS_URL+criteria);
  }
}
