import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrl: './gerant.component.css'
})
export class GerantComponent {
comptesADecouvert: any;

  constructor(private router: Router) {} 

  logout() {
    this.router.navigate(['/login']);
  }



}
