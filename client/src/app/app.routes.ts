import { Routes } from '@angular/router';
import { KhLoginComponent } from './kh-login/kh-login.component';
import { KhTestpageComponent } from './kh-testpage/kh-testpage.component';
import {KhHomepageComponent} from './kh-homepage/kh-homepage.component';

export const routes: Routes = [
    { path: '', component: KhLoginComponent },
    { path: 'test', component: KhTestpageComponent},
  {path: 'homepage', component: KhHomepageComponent},
];
