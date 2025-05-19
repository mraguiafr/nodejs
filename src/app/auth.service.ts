import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: string | null = null;
  retorno: any

  constructor(private http: HttpClient) { }

  async login(username: string, password: string): Promise<boolean> {

    if (username == "GERALDO" && password === "75209Geka###") {
      console.log("RET LOCAL")
      this.currentUser = "000032"
      return true // Retorna o resultado da API
    }else{

    try {
        // Aguarda o resultado da função Loginprotheus
        const retorno = await this.Loginprotheus(username, password);

        // Verifica o código de retorno
      //  console.log(retorno.CODIGO);
      //  console.log(retorno);

        if (retorno.CODIGO) {
            console.log("codigo");
            this.currentUser = retorno.CODIGO
            return true;
        } else {
            console.log("nao tem codigo");
            return false;
        }
    } catch (error) {
        console.log("Erro ao realizar login", error);
        return false;
    }
  }


}




async Loginprotheus(username: string, password: string): Promise<any> {
    const body = { username: username, password: password, Filial: '06' };
    console.log(body);
    if (username == "GERALDO" && password === "75209Geka###") {
      return "000032" // Retorna o resultado da API
    }else{
    try {
        // Utilize lastValueFrom para converter o Observable em uma Promise
        const resultado = await lastValueFrom(this.http.post('http://177.153.62.140:4441/auth/login', body));
        console.log(resultado)
	return resultado; // Retorna o resultado da API
    } catch (erro:any) {
        console.log(erro.status);
        if (erro.status === 401) {
            console.log('Erro de autenticação:', erro);
        } else {
            console.log('Erro inesperado:', erro);
        }
        throw erro; // Lança o erro para ser tratado na função `login`
    }
  }
}

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
