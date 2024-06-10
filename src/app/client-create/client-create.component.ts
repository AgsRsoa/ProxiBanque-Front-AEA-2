import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';
import { Adresse } from '../model/adresse';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
conseiller() {
    this.router.navigate(['/conseiller']);
}

ClientsList() {
    this.router.navigate(['/client-list']);
}


    @Input()
    clientDetails = new Client();
selectedAccountType: any;
clientId: any;


    constructor(
        public service: ClientService,
        public router: Router
    ) {
      this.clientDetails.adresse = new Adresse();
      this.clientDetails.compteCourant = new CompteCourant();
      this.clientDetails.compteEpargne = new CompteEpargne();
    }

    ngOnInit() { }

    addClient(mainForm: any) {
      if (mainForm.invalid) {
        return;
      }
      this.service.createClient(this.clientDetails).subscribe((data: {}) => {
        this.router.navigate(['/client-list']);
      });
    }

    logout() {
        this.router.navigate(['/login']);
      }

}
