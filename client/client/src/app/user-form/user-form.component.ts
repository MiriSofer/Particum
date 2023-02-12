import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import User from '../models/user';
import { ExcelService } from '../services/excel.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

flagOnError=false;
childrenToExport:any[] = [];

  constructor(public userService:UserService,
    private _snackBar: MatSnackBar,
    public fb: FormBuilder,
    private excelService:ExcelService) { }

  ngOnInit(): void {
    
  }
  saveUser(){
    if( this.userService.user.TZ.length < 9
    || this.userService.user.birthday > new Date() || this.userService.user.TZ.length>9 
    ||this.userService.user.LastName == "" || this.userService.user.FirstName == "" 
    ||this.userService.user.Gender == -1
    || this.userService.user.HMO==-1){
      this.flagOnError = true;
      return;
    }
    this.flagOnError = false;
    let errorMsg = "";
    this.userService.add(this.userService.user).subscribe((res:any)=>{
      if(res != undefined && res["id"] != undefined){
        this.userService.user.Id = res["id"];
        if(this.userService.children.length == 0){
          this.showFinishMessage();
        }
        this.userService.children.forEach((child:User,index) => {
          child.LastName = this.userService.user.LastName;
          child.HMO = this.userService.user.HMO;
          child.Parent = this.userService.user.Id;
          this.userService.add(child).subscribe((childRes:any)=>{
            if(childRes == undefined){
              //this._snackBar.open("Child has not been saved - TZ already exists", "Error",{duration:6000,verticalPosition:'top'});
              errorMsg += `\nchild ${child.FirstName} has not been saved - TZ already exists`;
            }
            else{
              this.childrenToExport.push(childRes);
            }
            if(index == this.userService.children.length-1){
              this.showFinishMessage(errorMsg);
            }
          })
        });
      }
      else{
        this._snackBar.open("TZ Already exists", "Error",{duration:6000,verticalPosition:'top'});
      }
    })
  }

  showFinishMessage(errorMsg = ""){
    let msg = `Parent and Children have been saved!`;
    msg += errorMsg;
    this._snackBar.open(msg, "Success",{duration:6000});
    this.exportAsXLSX();
    this.childrenToExport = [];
    this.userService.children = [];
    this.userService.user = new User("","",new Date(),"",-1,-1,undefined);
  }

  
exportAsXLSX():void {
  let parent:any = this.userService.user;
  parent["type"] = "Parent";
  let data:any[] = [];
  data.push(parent);
  if(this.childrenToExport.length > 0){
    this.childrenToExport.forEach((child:any)=>{
      child["type"] = "Child";
      data.push(child);
    });
  }
  this.excelService.exportAsExcelFile(data, 'user details');
}
}
