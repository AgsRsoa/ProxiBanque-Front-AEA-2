import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class AccountListComponent implements OnInit {
  router: any;
logout() {
throw new Error('Method not implemented.');
}
deleteClient(arg0: any) {
throw new Error('Method not implemented.');
}

  comptes: (CompteCourant | CompteEpargne)[] = [];
accounts: any;
client: any = [];
  constructor(
    public accountService: AccountService ,public clientService: ClientService
  ) { }

  ngOnInit() {
    this.loadAccounts();
    this.loadClients()
  }

  loadAccounts() {
    return this.accountService.getAccounts().subscribe((data: (CompteCourant | CompteEpargne)[]) => {
      console.log(data);
      this.comptes = data;
    });
  }


  ClientsList() {
    this.router.navigate(['/client-list']);
}
  conseiller() {
    this.router.navigate(['/conseiller']);
}


 loadClients() {
    return this.clientService.getClients().subscribe((data: {}) => { console.log(data);
      this.client = data;
    })
  }
}
