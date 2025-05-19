import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Login', link: '/login', icon: 'ph ph-user', shortLabel: 'Login' },
    { label: 'Pedidos', link: '/pedidos', icon: 'ph ph-newspaper', shortLabel: 'Pedidos' },
    { label: 'Home', link: '/home', icon: 'po-icon-home', shortLabel: 'Home' },
    { label: 'Cadastros', link: '/cliente', icon: 'ph ph-newspaper', shortLabel: 'Cliente' },
   // { label: 'Cadastro', link: '/cadastros', icon: 'po-icon-home', shortLabel: 'Cadastro' },
    { label: 'Receber', link: '/areceber', icon: 'ph ph-money', shortLabel: 'areceber' },
    {label: 'Relatorios', link: '/relatorios', icon: 'po-icon-user', shortLabel: 'relatorios', subItems: [
        {label: 'Pedidos Liberados', shortLabel: 'Relatorio01', link: 'relatorios/rel0001', icon: 'po-icon-star-filled'},
      //  {label: 'Gera Pef Nfe', shortLabel: 'Gera Danf', link: '/nfe-pdf-generator/', icon: 'po-icon-star-filled'}
       // {label: 'Pedidos Bloqueados', shortLabel: 'Relatorio02', link: 'relatorios/rel0002', icon: 'po-icon-star-filled'},
     //   { label: 'A Receber', link: '/areceber', icon: 'po-icon-home', shortLabel: 'A Receber' },
      ]}
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
