import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
export class ConseillerComponent {



  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  ClientsList() {
    this.router.navigate(['/client-list']);
  }

  createClient() {
    this.router.navigate(['/create-client']);
  }
}
