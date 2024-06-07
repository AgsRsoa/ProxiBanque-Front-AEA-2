import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { LoginComponent } from './login/login.component';
import { GerantComponent } from './gerant/gerant.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { AccountShowComponent } from './compte-show/compte-show.component';
import { AccountListComponent } from './compte-list/compte-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'conseiller', component: ConseillerComponent },
  { path: 'gerant', component: GerantComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-client', component: ClientCreateComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-edit/:id', component: ClientEditComponent},
  { path: 'client-show/:id', component: ClientShowComponent},
  { path: 'compte-list', component: AccountListComponent },
  { path: 'compte-show/:id', component: AccountShowComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }