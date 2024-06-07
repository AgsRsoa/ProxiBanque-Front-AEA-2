import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';
import { ClientService } from '../services/client.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class AccountListComponent implements OnInit {

  client: any = [];
  id = this.activatedRoute.snapshot.params['id'];
  router: any;
  comptes: (CompteCourant | CompteEpargne)[] = [];
  //accounts: any;
  //client: any = [];
  clientDetails: any = [{}];

constructor(public accountService: AccountService ,public clientService: ClientService,private activatedRoute: ActivatedRoute) {

}

  ngOnInit() {
    //this.loadAccounts();
    //this.loadClients()
    this.loadComptesClient();
  }

  /*loadAccounts() {
    return this.accountService.getAccounts().subscribe((data: (CompteCourant | CompteEpargne)[]) => {
      console.log(data);
      this.comptes = data;
    });
  }*/

  logout() {
  throw new Error('Method not implemented.');
  }
  deleteClient(arg0: any) {
  throw new Error('Method not implemented.');
  }

  ClientsList() {
    this.router.navigate(['/client-list']);
}
  conseiller() {
    this.router.navigate(['/conseiller']);
}


  loadComptesClient(){
   /* return this.accountService.getClientListAccount(this.id).subscribe((data: (CompteCourant | CompteEpargne)[]) => {
      console.log(data);
      this.comptes = data;
      */

      return this.accountService.getClientListAccount(this.id).subscribe((data: any) => {
      this.client = data;
    });


  }

  goToShow(){
    this.router.navigate([`/client-show/${this.id}`]);
    return false;
  }

 /*loadClients() {
    return this.clientService.getClients().subscribe((data: {}) => { console.log(data);
      this.client = data;
    })
  }*/
}
