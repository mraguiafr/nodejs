import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  bodypost:any
  constructor(private _http:HttpClient) { }

  // Conexao frontend to backend
//cnpj:any
 // apiUrl = 'localhost:3000/cliente/48539407007392';
  //apiUrl = 'localhost:3000/cliente/api/48539407007392';
  //GET DADOS DO CLIENTE


  // getCliente(cliente:string){
  //   this._http.get(`localhost:3000/cliente/api/${cliente}`)
  //           .toPromise()
  //           .then(response => {
  //             console.log(response)
  //           })
  //           return Responsehttp://192.168.2.11:3000/produto/anjo
  // }

  ApiRest = 'http://177.153.62.140:10099/cliente/body'
  postCliente(body: any) {
    console.log(body)

    this.bodypost = {
      "Cnpj"  : body,
      "Estado": body
    }


  console.log(this.bodypost )
  return this._http.post(this.ApiRest, body );


  }


  getCliente(cliente:string):Observable<any> {
console.log(cliente)
    return this._http.get(`http://177.153.62.140:4441/cliented/${cliente}`);

  }



  getcnpjja(cliente:string):Observable<any> {
    console.log(cliente)
        return this._http.get(`http://192.168.0.230:3000/cliente/api/${cliente}`);

      }



  getClientecnpj(cliente:string):Observable<any> {
    console.log(cliente)
        return this._http.get(`http://192.168.0.230:3000/cliente/api/${cliente}`);

      }


  getCliented(cliente:string):Observable<any> {
    console.log(cliente)
        return this._http.get(`http://192.168.0.230:3000/cliented/${cliente}`);

      }


}
