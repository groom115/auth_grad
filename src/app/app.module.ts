import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './myComp/login/login.component';
import { ForgotPassowrdComponent } from './myComp/forgot-passowrd/forgot-passowrd.component';
import { NoFoundComponent } from './myComp/no-found/no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassowrdComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
