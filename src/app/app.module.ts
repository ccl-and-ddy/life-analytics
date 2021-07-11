import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NavComponent } from './core/components/nav/nav.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { DashboardTypeSelectorComponent } from './modules/components/dashboard-type-selector/dashboard-type-selector.component';
import { DailyDashboardComponent } from './modules/components/dashboard-types/daily-dashboard/daily-dashboard.component';
import { AmountDashboardComponent } from './modules/components/dashboard-types/amount-dashboard/amount-dashboard.component';
import { DashboardPageComponent } from './modules/pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    DashboardTypeSelectorComponent,
    DailyDashboardComponent,
    AmountDashboardComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
