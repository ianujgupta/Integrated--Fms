import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {

  constructor(private http:HttpClient) {
   }

    //baseurl="http://localhost:8080/users/" 

  addUser(user:User):Observable<User>{
    let url="http://localhost:8082/users/adduser";
    let observable:Observable<User>= this.http.post<User>(url,user);
    console.log(" user service")
    return observable;  
  }

  getUserById(userId:number){
    let url="http://localhost:8082/users/get/"+userId;
    let observable:Observable<User>=this.http.get<User>(url);
    console.log(" user find user")
    return observable;
  }

  fetchAllUser():Observable<User[]>{
    let url="http://localhost:8082/users/all";
    let observable:Observable<User[]>=this.http.get<User[]>(url);
    console.log("inside SERVICE")
    return observable;
  }

  updateUser(userId:number){
    let url= "http://localhost:8082/users/update";
    let observable:Observable<User>=this.http.put<User>(url,userId);
    return observable;
  }

  removeUserById(id:number):Observable<void>{
      let url ="http://localhost:8082/users/delete/"+id;
      let observable:Observable<void>=this.http.delete<void>(url);
      return observable;
  }
  
}
