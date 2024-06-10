import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrl: './gerant.component.css'
})
export class GerantComponent {


comptesADecouvert: (CompteCourant | CompteEpargne)[] = [];
accountDetails: any;
  constructor(private router: Router,private accountService: AccountService) {}

  ngOnInit() {
    this.getComptesADecouvert();
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getComptesADecouvert() {
    this.accountService.getComptesADecouvert().subscribe(
      (data: (CompteCourant | CompteEpargne)[]) => {
        this.comptesADecouvert = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

}
