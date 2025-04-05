import { Routes } from '@angular/router';
import { KhLoginComponent } from './kh-login/kh-login.component';
import { KhTestpageComponent } from './kh-testpage/kh-testpage.component';

export const routes: Routes = [
    { path: '', component: KhLoginComponent },
    { path: 'test', component: KhTestpageComponent},
];
