
import { Client } from './client';

export class CompteEpargne {
  id: number = 0;
  typeCompte: string = 'epargne';
  client: Client | null = null;
  numeroDeCompte: string = '';
  solde: number = 0;
  dateOuverture: Date = new Date();
}

