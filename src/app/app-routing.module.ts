import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/pages/about/about.component';
import { DashboardPageComponent } from './modules/pages/dashboard-page/dashboard-page.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  }, 
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "dashboard",
    component: DashboardPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
