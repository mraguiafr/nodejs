import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Isso garante que o serviço esteja disponível em toda a aplicação.
})
export class DuplicadosService {

  constructor() { }

  eliminarDuplicatas(array: any[]): any[] {
    let resultado: any[] = [];
    let combinacoesUnicas = new Set();

    array.forEach(item => {
      let chaveUnica = `${item.PEDIDO}-${item.CLIENTE}-${item.FILIAL}-${item.LOJA}`;

      if (!combinacoesUnicas.has(chaveUnica)) {
        combinacoesUnicas.add(chaveUnica);
        resultado.push(item);
      }
    });

    return resultado;
  }
}
