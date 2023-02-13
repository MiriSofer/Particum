import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/user';
// import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showChildComponent=false;
  public kupot: any[] = [
    {value: 1, viewValue: 'Macabbi'},
    {value: 2, viewValue: 'Mehuchedet'},
    {value: 3, viewValue: 'Leumit'},
    {value: 4, viewValue: 'Clalit'},
  ];
  public user:User = new User("","",new Date(),"",-1,-1,undefined);
  public children:User[]=[];
  child:User = new User("","",new Date(),"",-1,-1);
  baseUrl = `${environment.baseUrl}User`;
    newUser1=new BehaviorSubject<{FirstName:string,LastName:string}>({FirstName:"",LastName:""});
// public newUser=new User("Miri","",new Date(),"123456",1,1,1)

  constructor(public httpClient: HttpClient) { }

  add(userObj: User) {
    userObj.Gender = parseInt(userObj.Gender.toString());
    //return this.httpClient.post<object>(`${this.baseUrl}/post/?u=${user}`, user);
    return this.httpClient.post<object>(`${this.baseUrl}`, userObj);
  }

  isBirthdayInvalid(birthday:Date){
    return birthday > new Date();
  }
}