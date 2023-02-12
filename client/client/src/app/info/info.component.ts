import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import User from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
userFirst=""
userLast=""

  sub!:Subscription;

  constructor(public router:Router,
    public userService:UserService) { }

  ngOnInit(): void {
    // this.firstName=this.userService.newUser.FirstName;
    // this.lastName=this.userService.newUser.LastName;
  //   this.sub = this.userService.newUser1.subscribe(succ => {
  //     this.userFirst = succ?.FirstName;
  //     this.userLast=succ?.LastName;
  //     console.log("from subscribe")
  // })
}
  // add()
  // {
  //   this.router.navigate(["add"]);
  // }
}