import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {

    logout() {
        this.router.navigate(['/login']);
        }
          conseiller() {
            this.router.navigate(['/conseiller']);
        }
    id = this.activatedRoute.snapshot.params['id'];
    clientDetails: any = {};

    constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router)
        {
            this.id = this.activatedRoute.snapshot.params['id'];
            console.log("id client",this.id);
            console.log(this.clientDetails)
        }


        ClientsList() {
            this.router.navigate(['/client-list']);
        }
    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            this.clientDetails = data;
        })
    }

    gotoList() {
        this.router.navigate(['/client-list']);

    }

    /*comptesList(){
      this.router.navigate([`/compte-list/${this.id}`]);
    }*/


}
