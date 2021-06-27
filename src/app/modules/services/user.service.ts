import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { UserData } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData = {dashboards:[]};

  constructor() { 
    this.userData = this.readUserData() ?? this.userData;
    console.log('userData', this.userData);
    console.log('local storage', localStorage.getItem('userData'));
  }

  readUserData() {
    const userDataString = localStorage.getItem('userData')
    if (userDataString) {
      return JSON.parse(userDataString);
    }

    return undefined;
  }
  
  writeUserData(kind:string) {
    if (kind === 'daily' || kind === 'amount') {
      this.userData.dashboards.push({
        name:'default', 
        kind,
      })

      const userDataString = JSON.stringify(this.userData);
      localStorage.setItem('userData', userDataString);
    } else {
      alert('bad kid');
    }
  }

}
