import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'create-event', component: CreateEventComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
