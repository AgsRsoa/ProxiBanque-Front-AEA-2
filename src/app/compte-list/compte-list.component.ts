import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';
import { ClientService } from '../services/client.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class AccountListComponent implements OnInit {


  id = this.activatedRoute.snapshot.params['id'];
  comptes: (CompteCourant | CompteEpargne)[] = [];


constructor(public accountService: AccountService ,public clientService: ClientService,private activatedRoute: ActivatedRoute,private router: Router) {


}

  ngOnInit() {

    this.loadComptesClient();
  }



  logout() {
    this.router.navigate(['/login']);
  }



  deleteCompteClient(id: number) {
    if (window.confirm('êtes vous sure de vouloir le supprimer?')) {
      this.accountService.deleteCompteClient(id).subscribe(data => {
        this.loadComptesClient();
      });
    }
  }

  ClientsList() {
    this.router.navigate(['/client-list']);
}
  conseiller() {
    this.router.navigate(['/conseiller']);
}


  loadComptesClient(){
    return this.accountService.getClientListAccount(this.id).subscribe((data: (CompteCourant | CompteEpargne)[]) => {
      console.log(data);
      this.comptes = data;
      console.log("this.comptes",this.comptes);


  }
  );





  }



}
