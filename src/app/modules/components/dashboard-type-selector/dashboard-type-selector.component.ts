import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard-type-selector',
  templateUrl: './dashboard-type-selector.component.html',
  styleUrls: ['./dashboard-type-selector.component.scss'],
})
export class DashboardTypeSelectorComponent implements OnInit {

  constructor(readonly userService: UserService, private dialogRef: MatDialogRef<DashboardTypeSelectorComponent>) { }

  ngOnInit(): void {
  }

  createDashboard(kind:string) {
    // save dashboard type in local storage
    this.userService.writeUserData(kind);

    // add dashboard on page

    // close modal
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
