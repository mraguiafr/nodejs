import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private apiUrl = 'http://192.168.0.230:3000/graficos/vendedor'; // Altere para sua URL de API
  private apiUrlc = 'http://192.168.0.230:3000/graficos/cliente'; // Altere para sua URL de API
  private apiUrlmano = 'http://192.168.0.230:3000/graficos/metaano'; // Altere para sua URL de API

  
  constructor(private http: HttpClient) { }

  // Método para buscar dados dos vendedores
  getVendedores(vendedor: string): Observable<any> {
    const url = `${this.apiUrl}/${vendedor}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manipulação de erro
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Erro do servidor: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // Método para buscar dados dos vendedores
  getclientes(cliente: string): Observable<any> {
    const url = `${this.apiUrlc}/${cliente}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError1)
      );
  }

  // Manipulação de erro
  private handleError1(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Erro do servidor: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }

   // Método para buscar dados dos vendedores
   getmetaano(metaano: string): Observable<any> {
    const url = `${this.apiUrlmano}/${metaano}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError2)
      );
  }

  // Manipulação de erro
  private handleError2(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Erro do servidor: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
