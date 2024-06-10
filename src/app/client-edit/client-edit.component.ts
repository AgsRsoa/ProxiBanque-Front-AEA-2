import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';
//import { Adresse } from '../model/adresse';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})

export class ClientEditComponent implements OnInit {
logout() {
this.router.navigate(['/login']);
}
  conseiller() {
    this.router.navigate(['/conseiller']);
}

ClientsList() {
    this.router.navigate(['/client-list']);
}
  id = this.activatedRoute.snapshot.params['id'];
  clientDetails: any = {};

  constructor( private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
      this.clientDetails = new Client();
     // this.clientDetails.adresse = new Adresse();
  }

  ngOnInit() {
    this.service.getClient(this.id).subscribe((data: {}) => {
      this.clientDetails = data;
    })
  }

  updateClient() {
    if ( window.confirm('Etes vous sûr de vouloir modifier les informations ?')) {
      this.service.updateClient(this.id, this.clientDetails).subscribe(data => {
        this.router.navigate([`/client-show/${this.id}`])
      })
    }
  }

  goToShow(){
    this.router.navigate([`/client-show/${this.id}`]);
    return false;
  }

}
