import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { LoginComponent } from './login/login.component';
import { GerantComponent } from './gerant/gerant.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { AccountShowComponent } from './compte-show/compte-show.component';
import { AccountListComponent } from './compte-list/compte-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientShowComponent,
    LoginComponent,
    GerantComponent,
    ConseillerComponent,
    AccountListComponent,
    AccountShowComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }