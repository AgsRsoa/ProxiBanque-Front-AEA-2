import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  testUser(login: string): string {
    if  (login === 'conseiller') {
      return 'CONSEILLER';
    } else if(login === 'client') {
      return 'CLIENT';
    }
    return 'ACCUEIL';
  }

  loginUser(login: string): string {
    // Simulate a real login call
    return this.testUser(login);
  }
}
