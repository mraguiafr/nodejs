import { Component } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryType, PoPageBlockedUserReasonParams, PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals, PoPageLoginRecovery } from '@po-ui/ng-templates';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  [x: string]: any;


     nome: string | undefined
    senha: string | undefined

  attempts = 3;
  exceededAttempts: number | undefined;
  literalsI18n!: PoPageLoginLiterals;
  loading: boolean = false;
  loginErrors = [];
  passwordErrors = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 24 };
  passwordRecovery: PoPageLoginRecovery = {
    url: '',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'whatszap' +' '+ '11963926953'
  };
  showPageBlocked: boolean = false;

  private i18nSubscription: Subscription | undefined;

  customField: PoPageLoginCustomField = {
    property: 'EMPRESA1',
      options: [{ label: 'TODAS EMPRESAS', value: '04' }],

  };


  customField1: PoPageLoginCustomField = {
    property: 'EMPRESA',
      options: [this['empresas']],

  };


constructor( private router: Router,
  private authService: AuthService,private poNotification: PoNotificationService){

}

async loginSubmit(formData: PoPageLogin) {
  this.username = formData.login;
  this.password = formData.password;

  try {
    // Use await para aguardar a execução da função de login
    const loginResult = await this.authService.login(this.username, this.password);
    if (loginResult) {
      // Redireciona para a página '/home' se o login foi bem-sucedido
      this.router.navigate(['/home']);
    } else {
      // Exibe um alerta se o login falhar
      alert('Login ou senha inválidos');
    }
  } catch (error) {
    // Trate possíveis erros aqui
    console.error('Erro ao realizar o login', error);
    alert('Erro ao tentar realizar o login');
  }
}

passwordChange() {
  if (this.passwordErrors.length) {
    this.passwordErrors = [];
  }
}

loginChange() {
  if (this.loginErrors.length) {
    this.loginErrors = [];
  }
}

private generateAttempts() {
  if (this.attempts >= 1) {
    this.attempts--;
    this.exceededAttempts = this.attempts;
  }
  if (this.attempts === 0) {
    this.showPageBlocked = true;
  }
}
}




