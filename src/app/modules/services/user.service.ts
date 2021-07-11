import { Injectable } from '@angular/core';
import {map, take} from 'rxjs/operators';
import { BehaviorSubject, Observable, of as observableOf, ReplaySubject } from 'rxjs';
import { Dashboard, UserData } from '../model/models';

const EMPTY_USER_DATA = {dashboards: []};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData = new ReplaySubject<UserData>(1);

  constructor() {
    this.userData.next(this.readUserData() ?? EMPTY_USER_DATA);
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
    this.userData.pipe(take(1)).subscribe(userData => {
      const {dashboards} = userData;
      if (kind === 'daily' || kind === 'amount') {
        let nextId = 0;
        if (dashboards.length) {
          nextId = Math.max(...dashboards.map(dashboard => Number(dashboard.id))) + 1;
        }
        const newDashboard: Dashboard = {
          id: `${nextId}`,
          name:'default', 
          kind,
        };
        const newUserData = {...userData, dashboards: [...dashboards, newDashboard]};
        const userDataString = JSON.stringify(newUserData);
        localStorage.setItem('userData', userDataString);
        this.userData.next(newUserData);
      } else {
        console.log('Error adding user data');
      }
    });
  }
}
