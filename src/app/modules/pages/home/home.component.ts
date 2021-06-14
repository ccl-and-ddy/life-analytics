import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HomeComponent implements OnInit {

  isSelectorOpen = false;

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  onClick(event: Event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.isSelectorOpen = false;
    }
  }

  openSelector() {
    this.isSelectorOpen = true;
  }
}
