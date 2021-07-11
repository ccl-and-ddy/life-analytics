import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DashboardTypeSelectorComponent } from '../../components/dashboard-type-selector/dashboard-type-selector.component';
import {Dashboard, UserData} from '../../model/models';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  userData: Observable<UserData>;

  constructor(private dialog: MatDialog, userService:UserService) { 
    this.userData = userService.userData.asObservable();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DashboardTypeSelectorComponent);
  }

  ngOnInit(): void {
    this.saveUser();
  }

  getRouterLink(dashboard: Dashboard) {
    return ['/dashboard', dashboard.id];
  }

  saveUser() {
    // const user:UserData = {
    //   dashboards:[],
    // }

    // if(!localStorage.getItem('userData')) {
    //   localStorage.setItem('userData', JSON.stringify(user));
    // }

    // let test = localStorage.getItem('userData');
    // console.log(test);
  }
}
