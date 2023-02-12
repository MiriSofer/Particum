import { Component, OnInit } from '@angular/core';
import User from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  flagOnErrorChild = false;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  saveChild(){
    if(this.userService.child.FirstName == "" ||
    this.userService.child.Gender == -1 ||
    this.userService.child.birthday > new Date() ||
    this.userService.child.TZ.length < 9 ||
    this.userService.child.TZ == ""){
      this.flagOnErrorChild = true;
      return;
    }
    this.userService.children.push(this.userService.child);
    this.reset();
  }

  reset(){
    //מאפסים
    this.userService.child = new User("","",new Date(),"",-1,-1);
    this.flagOnErrorChild = false;
  }
}