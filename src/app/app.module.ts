import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NavComponent } from './core/components/nav/nav.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { DashboardTypeSelectorComponent } from './modules/components/dashboard-type-selector/dashboard-type-selector.component';
import { DailyDashboardComponent } from './modules/components/dashboard-types/daily-dashboard/daily-dashboard.component';
import { AmountDashboardComponent } from './modules/components/dashboard-types/amount-dashboard/amount-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    DashboardTypeSelectorComponent,
    DailyDashboardComponent,
    AmountDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
