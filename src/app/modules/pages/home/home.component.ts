import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { DashboardTypeSelectorComponent } from '../../components/dashboard-type-selector/dashboard-type-selector.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create();
  }

  ngOnInit(): void {
  }

  open() {
    const componentPortal = new ComponentPortal(DashboardTypeSelectorComponent);
    this.overlayRef.attach(componentPortal);
  }
}
