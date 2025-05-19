import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://177.153.62.140:4441/atualizarCliente'; // URL da API

  constructor(private http:HttpClient) { }

  buscar(cliente:string):Observable<any> {

    return this.http.get(`http://177.153.62.140:4441/cliente/api/${cliente}`);

  }

  // Função para enviar os dados do cliente
  atualizarCliente(dadosCliente: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(this.apiUrl, dadosCliente, { headers });
  }

}
