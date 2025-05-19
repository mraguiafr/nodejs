import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CclienteService {

  constructor(private http: HttpClient) { }


  public cclientes(urlcod:string):Observable<any> {

    return this.http.get(`http://192.168.0.1:3000/cliente/pedidos/cliente/${urlcod}`);

  }

}
