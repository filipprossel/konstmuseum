import { Routes } from '@angular/router';
import { KhLoginComponent } from './kh-login/kh-login.component';
import { KhHomepageComponent} from './kh-homepage/kh-homepage.component';
import { KhRegisterComponent } from './kh-register/kh-register.component';
import { KhProfileComponent } from './kh-profile/kh-profile.component';
import { KhFormsComponent} from './kh-forms/kh-forms.component';
import { KhPostsComponent} from './kh-post/kh-post.component';
import { authGuard } from './auth.guard';
import { KhEventComponent } from './kh-event/kh-event.component';
import { KhEventDetailComponent } from './kh-eventdetail/kh-eventdetail.component';
import {KhArtPostComponent} from './kh-art-post/kh-art-post.component';
import { KhArtphotoRecensionComponent } from './kh-artphoto-recension/kh-artphoto-recension.component';
import { KhLiveChatComponent } from './kh-live-chat/kh-live-chat.component';
import { KhYourReviewsComponent } from './kh-your-reviews/kh-your-reviews.component';

export const routes: Routes = [
    {path: 'login', component: KhLoginComponent },
    {path: '', component: KhHomepageComponent, canActivate: [authGuard]},
    {path: 'signup', component: KhRegisterComponent},
    {path: 'profile', component: KhProfileComponent, canActivate: [authGuard]},
    {path: 'forms', component: KhFormsComponent, canActivate: [authGuard]},
    {path: 'posts', component: KhPostsComponent, canActivate: [authGuard]},
    {path: 'exhibition', component: KhEventComponent, canActivate: [authGuard]},
    {path: 'exhibition/:id', component: KhEventDetailComponent, canActivate: [authGuard]},
    {path: 'art', component: KhArtPostComponent, canActivate: [authGuard]},
    {path: 'exhibition/:exhibitionId/art/:artId', component: KhArtphotoRecensionComponent, canActivate: [authGuard]},
    {path: 'exhibition/:exhibitionId/reviews', component: KhYourReviewsComponent, canActivate: [authGuard]}
];
