import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.getCurrentUser();
    const targetRoute = state.url;

    // Lista de códigos permitidos para acesso ao "financeiro"
    const allowedUsers = ['000024', '000032', '000033', '000034', '000035'];

    // Verifica se o currentUser não é nulo e se o usuário tem permissão para acessar o "financeiro"
    if (targetRoute === '/financeiro' && (!currentUser || !allowedUsers.includes(currentUser))) {
      console.log("Acesso ao financeiro negado para o usuário:", currentUser);
      this.router.navigate(['/acesso-negado']);
      return false;
    }

    // Permitir acesso para usuários autenticados
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Redireciona para a página de login se o usuário não estiver autenticado
    this.router.navigate(['/login']);
    return false;
  }
}
