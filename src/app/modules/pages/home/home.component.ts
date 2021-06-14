import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DashboardTypeSelectorComponent } from '../../components/dashboard-type-selector/dashboard-type-selector.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isSelectorOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSelector() {
    this.isSelectorOpen = true;
  }

  closeSelector() {
    this.isSelectorOpen = false;
  }
}
