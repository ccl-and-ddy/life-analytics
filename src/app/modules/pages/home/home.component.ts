import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DashboardTypeSelectorComponent } from '../../components/dashboard-type-selector/dashboard-type-selector.component';
import {UserData} from '../../model/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DashboardTypeSelectorComponent);
  }

  ngOnInit(): void {
    this.saveUser();
  }

  saveUser() {
    const user:UserData = {
      dashboards:[],
    }

    if(!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(user));
    }

    let test = localStorage.getItem('userData');
    console.log(test);
  }
}
