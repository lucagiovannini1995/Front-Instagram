import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';


const pagesrouter: Routes = [{
    path: '',
    component: PagesComponent,
        children: [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
}];


// tslint:disable-next-line: variable-name
export const Page_routes = RouterModule.forChild(pagesrouter);
