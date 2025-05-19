import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtualizarService {

  constructor() { }

  // Função para atualizar a descrição de um item específico
  //atualizarDescricao(array: any[], item: string, produto: string, novaqtdvem: number ,novavlunit: number, novavltotal: number, novasaida: string , novates: string ): any[] {
  atualizarDescricao(array: any[], item: string, produto: string, novaqtdvem: number ,novavlunit: number, novavltotal: number, novasaida: string , novates: string ,novaentrega: string): any[] {
    // Percorre o array procurando o item e produto correspondente

// console.log(novaentrega)
 let dia = novaentrega.substring(0, 2); // Extrai o dia
 let mes = novaentrega.substring(2, 4); // Extrai o mês
 let ano = novaentrega.substring(4, 8); // Extrai o ano

// // Cria a data no formato dd-MM-yyyy
 let dataFormatada: string = `${ano}-${mes}-${dia}`;

//console.log(dataFormatada); // Saída: "03-10-2024"



    array.forEach(obj => {
      if (obj.ITEM === item && obj.PRODUTO.trim() === produto.trim()) {
        obj.VENDIDO = novaqtdvem; // Atualiza a descrição
        obj.VALOR_UNITARIO = novavlunit; // Atualiza a descrição
        obj.VALOR_TOTAL = novavltotal; // Atualiza a descrição
        obj.ENTREGA = dataFormatada; // Atualiza a descrição
        obj.TES = novates; // Atualiza a descrição
        obj.CFOP = novasaida; // Atualiza a descrição
      }
    });

    return array; // Retorna o array atualizado
  }
}
