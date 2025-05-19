import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private baseUrl = 'http://192.168.0.230:3000'; // Base URL da sua API

  constructor(private http: HttpClient) { }

  grava: Array<any> = [];

  public listacliente(urlid:string):Observable<any> {
console.log("INICIAL E LISTA")
    return this.http.get(`http://192.168.0.230:3000/cliente/${urlid}`);

  }

  public listarpedidos(urlid:string):Observable<any> {
    console.log("INICIAL E LISTA PEDIDOS")
    urlid = 'pedidos'
        return this.http.get(`http://177.153.62.140:4441/Pedidos/${urlid}`);

      }


      public cliped(urlid:string):Observable<any> {
        console.log("INICIAL cliente pedidos")
               return this.http.get(`http://192.168.0.230:3000/cliped?${urlid}`);
                               //http://192.168.0.230:3000/cliped?cnpj=59535047000100
          }


  public pedidos(urlid:string):Observable<any> {

    return this.http.get(`http://192.168.0.230:3000/cliente/pedidos/${urlid}`);

  }



public cepcerto(urlid:string):Observable<any> {

  return this.http.get(`https://viacep.com.br/ws/${urlid}/json`);

}




public transporte(urlid:string):Observable<any> {

  return this.http.get(`http://192.168.0.230:3000/transporte/`);

}





  public prudutos(urlid:string):Observable<any> {

    return this.http.get(`http://192.168.0.230:3000/produto/${urlid}`);

  }


   public titulos(urlid:string):Observable<any> {

    return this.http.get(`http://192.168.0.230:3000/cliente/titulos/${urlid}`);

  }

  public pedidosliberados(urlid:string):Observable<any> {
	console.log('pediso ohje')
    return this.http.get(`http://177.153.62.140:4441/cliente/pedidos/liberados/07`);

  }

  public pedidosliberadoss(urlid:string):Observable<any> {

    return this.http.get(`http://177.153.62.140:44441/cliente/pedidos/liberados/${urlid}`);

  }

  public pedidosbloqueados(urlid:string):Observable<any> {

    return this.http.get(`http://192.168.0.230:3000/cliente/pedidos/bloqueados/${urlid}`);

  }

  public pedidosbloqueadoss(urlid:string):Observable<any> {

    return this.http.get(`http://191.13.133.82:3000/cliente/pedidos/bloqueados/${urlid}`);

  }

  public orcbloqueados(urlid:string){

    return this.http.get(`http://192.168.0.230:3000/orcamento/bloqueados/${urlid}`);

  }

  public orcbloqueadoss(urlid:string):Observable<any> {

    return this.http.get(`http://191.13.133.82:3000/orcamento/bloqueados/${urlid}`);

  }

save(grava:any ){
console.log(grava)
return this.http.post('http://192.168.0.230:3000/orcamento/bloqueados/',{ title: 'Angular POST Request Example' });

}
  public pedidosall(urlid:string):Observable<any> {

    return this.http.get(`http://192.168.0.230:3000/pedidos/${urlid}`);

  }

  // public areceber(areceber:any):Observable<any> {
  //   console.log(areceber)
  //   return this.http.get(`http://192.168.0.230:3000/areceber/${areceber}`);

  // }

  public areceber(data: any): Observable<any> {
    // Transformar o JSON em query string
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.set(key, data[key]);
      }
    }

    console.log(params)
    // Fazer a requisição GET com os parâmetros na query string
    return this.http.get(`${this.baseUrl}/areceber`, { params });
  }



  public areceberr(urlid:string):Observable<any> {

    return this.http.get(`http://191.13.133.82:3000/areceber/${urlid}`);

  }

  public topclientes(urlid:string):Observable<any> {

    return this.http.get(`http://192.168.0.230:3000/topclientes/${urlid}`);

  }

  public topclientess(urlid:string):Observable<any> {

    return this.http.get(`http://191.13.133.82:3000/topclientes/${urlid}`);

  }




}
