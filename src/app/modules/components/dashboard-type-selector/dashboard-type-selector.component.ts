import { EventEmitter } from '@angular/core';
import { ElementRef, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-type-selector',
  templateUrl: './dashboard-type-selector.component.html',
  styleUrls: ['./dashboard-type-selector.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class DashboardTypeSelectorComponent implements OnInit {

  @Output() clickOutside = new EventEmitter<void>();

  isComponentInstantiated = false;

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }


  onClick(event: Event) {
    if (this.isComponentInstantiated && !this._eref.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
    this.isComponentInstantiated = true;
  }
}
