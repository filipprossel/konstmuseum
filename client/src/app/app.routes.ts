import { Routes } from '@angular/router';
import { KhLoginComponent } from './kh-login/kh-login.component';
import { KhTestpageComponent } from './kh-testpage/kh-testpage.component';
import {KhHomepageComponent} from './kh-homepage/kh-homepage.component';
import { KhRegisterComponent } from './kh-register/kh-register.component';
import { KhProfileComponent } from './kh-profile/kh-profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'login', component: KhLoginComponent },
    {path: 'test', component: KhTestpageComponent, canActivate: [authGuard]},
    {path: '', component: KhHomepageComponent, canActivate: [authGuard]},
    {path: 'signup', component: KhRegisterComponent},
    {path: 'profile', component: KhProfileComponent, canActivate: [authGuard]},
];
