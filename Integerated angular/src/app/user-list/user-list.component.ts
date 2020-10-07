import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users:User[];

  constructor(private service: UserService,private router:Router) {
    let observable: Observable<User[]> = service.fetchAllUser();
    observable.subscribe(
      userArr => {
        this.users = userArr;
      }
    );
  }

  removeUser(id: number) {
    let observable = this.service.removeUserById(id);
    observable.subscribe(
      res =>   this.removeLocalElement(id),
      err =>console.log("inside remove, err is " + err.message)
    );
  }
  removeLocalElement(id:number): void {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i];
      if (user.userId === id) {
        this.users.splice(i, 1);
      }
    }
  }

  updateUser(){
    this.router.navigate(['/update-user']);
  }
}
