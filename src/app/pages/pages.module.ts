import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Page_routes } from './pages.routes';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    PagesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    Page_routes
  ]
})
export class PagesModule { }
