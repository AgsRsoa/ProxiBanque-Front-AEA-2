import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client: any = [];
  clientDetails: any = [{}];

  constructor(
    public service: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadClients();
  }

  logout() {
    this.router.navigate(['/login']);
    }
      conseiller() {
        this.router.navigate(['/conseiller']);
    }

  loadClients() {
    this.service.getClients().subscribe((data: any) => {
      this.client = data;
    });
  }

  deleteClient(id: number) {
    if (window.confirm('Etes vous sûr de vouloir le supprimer?')) {
      this.service.deleteClient(id).subscribe(data => {
        this.loadClients();
      });
    }
  }
}
