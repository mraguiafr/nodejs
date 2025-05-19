import { Component } from '@angular/core';
import { PoCheckboxGroupOption, PoDialogService, PoDynamicFormComponent, PoDynamicFormField, PoDynamicViewField, PoModalAction, PoModalComponent, PoNotificationService, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-acesso-negado',
  template: `
    <h1>Acesso Negado</h1>
    <p>Você não tem permissão para acessar esta página.</p>
  `,
  styles: []
})
export class AcessoNegadoComponent {}
