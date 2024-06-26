import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CompteCourant } from '../model/compte-courant';
import { CompteEpargne } from '../model/compte-epargne';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    endpoint = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    // Méthode pour obtenir la liste des comptes bancaires et des clients
    getAccounts(): Observable<(CompteCourant | CompteEpargne)[]> {
        return this.http.get<(CompteCourant | CompteEpargne)[]>(this.endpoint + '/comptes', this.httpOptions)
           // .pipe(
            //    catchError(this.handleError)
           // );
    }

        // Méthode pour obtenir les détails d'un compte spécifique
        getAccount(id: number): Observable<CompteCourant | CompteEpargne> {
            return this.http.get<CompteCourant | CompteEpargne>(`${this.endpoint}/comptes/${id}`, this.httpOptions)
             /*   .pipe(
                    catchError(this.handleError)
                );*/
        }


        getClientListAccount(id: number): Observable<(CompteCourant | CompteEpargne)[]>{
          return this.http.get<(CompteCourant | CompteEpargne)[]>(this.endpoint + `/comptes/client/${id}`, this.httpOptions)
           /*.pipe(
                    catchError(this.handleError)
                );*/
        }

        deleteCompteClient(id: any): Observable<void>{
          return this.http.delete<void>(`${this.endpoint}/comptes/${id}`,this.httpOptions)
           .pipe(
              catchError(this.handleError)
          );
        }

          // Méthode pour obtenir la liste des comptes à découvert
    getComptesADecouvert(): Observable<(CompteCourant | CompteEpargne)[]> {
      return this.http.get<(CompteCourant | CompteEpargne)[]>(`${this.endpoint}/comptes/decouvert?solde=-0.1`, this.httpOptions)
          .pipe(
              catchError(this.handleError)
          );
  }

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => new Error(errorMessage));
      }


}
