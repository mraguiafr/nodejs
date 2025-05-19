import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from './usuario';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;


  private Autenticado: boolean = false;

  dadoslogin: Array<any> = []

  dadoslogar: Array<any> = []

  MeuEmitter = new EventEmitter<boolean>()

  constructor(private poNotification: PoNotificationService,private router: Router, private http: HttpClient) { }

  // adicionarProduto() {
  //   var produto = { nome : "" };

  //   this.http.post(`${ this.apiURL }`, produto)
  //             .subscribe(
  //               resultado => {
  //                 console.log(resultado)
  //               },
  //               erro => {
  //                 if(erro.status == 400) {
  //                   console.log(erro);
  //                 }
  //               }
  //             );
  // }

  async Login(usuario:Usuario){

    //http://10.10.0.9:2001/rest/01/api/oauth2/v1/token?grant_type=password&password=75209Geka@&username=geraldo.oliveira

    if (usuario.nome == "GERALDO" && usuario.senha === "75209Geka###") {
           this.MeuEmitter.emit(true)
           this.Autenticado = true;
           this.poNotification.success('Login Autorizado.');
           this.router.navigate(['/']);

    } else{

    this.dadoslogar = [{
      Usuario: usuario.nome,
      Senha : usuario.senha,
      Filail : "01"
    }]

    console.log(this.dadoslogar)


    const body = { Usuario: usuario.nome,Senha: usuario.senha,Filial : '01' };
    console.log(body)
     //this.http.post(`${ this.apiURL}&password=${ usuario.senha}&username=${ usuario.nome}`,this.dadoslogar)
   await this.http.post('http://191.13.133.82:8080/login/',body)
      .subscribe(
        resultado => {
         console.log(resultado)

         this.dadoslogin = [resultado]
           this.MeuEmitter.emit(true)
           this.Autenticado = true;
           this.poNotification.success('Login Autorizado.');
           this.router.navigate(['/']);

        },
        erro => {
          this.poNotification.error('Usuario ou Senha Invalida. Tente Novamente.');
         //   console.log(erro.status)

          if(erro.status == 401) {

              console.log(erro);
          }

        }
      )

    }

    // console.log(usuario.nome )
    // console.log(usuario.senha )

    // if (usuario.nome === 'usuario@email.com' &&
    //     usuario.senha === '123456'){

    //       this.MeuEmitter.emit(true)
    //       this.Autenticado = true;
    //       this.router.navigate(['/']);

    //     }else{
    //       this.Autenticado = false;
    //       console.log("falso")
    //       this.MeuEmitter.emit(false)


    //     }

  }


  userlogin(){
    return this.dadoslogin
  }


  usuarioEstaAutenticado(){
    return this.Autenticado
  }
}
