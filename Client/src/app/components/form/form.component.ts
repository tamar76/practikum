import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/Models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy {

  user = new User();
  children = [];
  userName = null;

  constructor(private userSvc: UserService) {
    console.log(this.user);
    
   }
  ngOnDestroy(): void {

    this.userSvc.saveInStorage("currentUser", this.user);
    this.userSvc.saveInStorage("children", this.children);
    this.userSvc.currentUser.next(this.user);
  }
  logIn() {
    console.log(this.user);
    
    this.userSvc.saveInStorage("currentUser",this.user);
    this.userSvc.saveInStorage("children",this.children);
    this.userSvc.currentUser.next(this.user);
    let request = [];
    request.push(this.user as User);
    if (this.children.length > 0) {
      this.children.forEach(item => {
        request.push(item as User);
      })
    }
    if (request.length > 0)
      this.userSvc.saveUser(request).toPromise().then(t=>{
        console.log(t)}
        );
  }


  setChildrenRelation() {
    if (this.children.length > 0)
      this.children.forEach(element => {
        element.parentId = this.user.Identity;
      });
  }
  addChild() {
    console.log(this.children);
    this.children.push(new User());
    console.log(this.children);
    
  }



  ngOnInit(): void {
    var userStore = this.userSvc.getFromStorage("currentUser");
    
    this.user = userStore&&userStore.length > 0||userStore instanceof Object ? userStore: this.user;
    
    var childrenStore = this.userSvc.getFromStorage("children");
    this.children = childrenStore ? Array.from(childrenStore) : [];
  }


}

