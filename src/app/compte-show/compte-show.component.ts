import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';

@Component({
    selector: 'app-compte-show',
    templateUrl: './compte-show.component.html',
    styleUrls: ['./compte-show.component.css']
})
export class AccountShowComponent implements OnInit {
logout() {
    this.router.navigate(['/login']);
}

    id: number;
    accountDetails: CompteCourant | CompteEpargne = new CompteCourant();

    constructor(private service: AccountService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.id = this.activatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.service.getAccount(this.id).subscribe((data: CompteCourant | CompteEpargne) => {
            this.accountDetails = data;
        });
    }

    isCompteCourant(account: CompteCourant | CompteEpargne): account is CompteCourant {
        return (account as CompteCourant).decouvert !== undefined;
    }

    gotoList() {
        this.router.navigate(['/compte-list']);
        return false;
    }

    ClientsList() {
        this.router.navigate(['/client-list']);
    }
      conseiller() {
        this.router.navigate(['/conseiller']);
    }
}
