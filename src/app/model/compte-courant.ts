
import { Client } from './client';

export class CompteCourant {
  id: number = 0;
  decouvert: number = -1000;
  typeCompte: string = 'courant';
  client: Client | null = null;
  numeroDeCompte: string = '';
  solde: number = 0;
  dateOuverture: Date = new Date();
}
