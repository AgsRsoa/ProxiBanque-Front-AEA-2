import { Adresse } from './adresse';
import { CompteCourant } from './compte-courant';
import { CompteEpargne } from './compte-epargne';

export class Client {
  id: number = 0;
  nom: string = '';
  prenom: string = '';
  adresse: Adresse = new Adresse();
  compteCourant?: CompteCourant;
  compteEpargne?: CompteEpargne;
}
