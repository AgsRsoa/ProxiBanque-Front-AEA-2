import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { login: '', motDePasse: '' };

  constructor(private router: Router) {}

  login() {
    if (this.loginData.login === 'conseiller' && this.loginData.motDePasse === 'conseiller') {
      this.router.navigate(['/conseiller']);
    } else if (this.loginData.login === 'gerant' && this.loginData.motDePasse === 'gerant') {
      this.router.navigate(['/gerant']);
    } else {
      alert('Identifiant ou mot de passe incorrect');
    }
  }

  setLoginData(role: string) {
    if (role === 'conseiller') {
      this.loginData.login = 'conseiller';
    } else if (role === 'client') {
      this.loginData.login = 'client';
    }
  }
}
