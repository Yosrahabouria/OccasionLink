import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    CreateUserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule // <-- Add this import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
