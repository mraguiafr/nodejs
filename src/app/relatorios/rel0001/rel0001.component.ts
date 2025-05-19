import { Component } from '@angular/core';
import { PoDynamicFormField, PoDynamicFormValidation, PoTableColumn } from '@po-ui/ng-components';
import { Cliente } from '../../cliente/cliente';
import { ListaService } from '../../cliente/lista.service';
import * as ExcelJS from 'exceljs';
import * as moment from 'moment';

@Component({
  selector: 'app-rel0001',
  templateUrl: './rel0001.component.html',
  styleUrls: ['./rel0001.component.css']
})
export class Rel0001Component {

  items: Array<any> = []

  columns: Array<PoTableColumn> = [
    {
      property: 'STATUS',
      type: 'label',
      width: '5%',
      labels: [
        { value: '02', color: 'color-07', label: 'S/ESTOQUE' },
        { value: '  ', color: 'color-11', label: 'C/ESTOQUE' }

      ]
    },
    { property: 'EMISSAO', label: 'EMISSAO', type: 'date'},
    { property: 'ENTREGA', label: 'ENTREGA', type: 'date'},
    { property: 'NOME', label: 'NOME' },
    { property: 'PEDIDO', label: 'PEDIDO'},
    { property: 'ITEM', label: 'ITEM' },
    { property: 'PRODUTO', label: 'PRODUTO'},
    { property: 'DESCRICAO', label: 'Descrição'},
    { property: 'C6_UM',label : 'UNIDADE'},
    { property: 'VENDIDO',label : 'VENDIDO' },
    { property: 'ENTREGUE',label : 'ENTREGUE'},
    { property: 'PENDENTE',label : 'PENDENTE'},
    { property: 'VALOR_UNITARIO', type: 'currency', format: 'R$'},
    { property: 'VALOR_PENDENTE', type: 'currency', format: 'R$'},
    { property: 'VALOR_TOTAL', type: 'currency', format: 'R$'},
    { property: 'CLIENTE', label: 'CLIENTE' },
    { property: 'LIBERADO', label: 'LIBERADO', type: 'date'},
    { property: 'OBS', label: 'OBSERVAÇÃO'},
   // { property: 'LOJA', label: 'LOJA'},
    //{ property: 'VENDEDOR', label: 'VENDEDOR'},
   // { property: 'FAMILIA', label: 'FAMILIA'}

  ];
  total: number = 0;
  totalall: number = 0;
  totalExpanded = 0;



////////////////////////////////////////////////////////////////////////////////////////////////

person = {};
  validateFields: Array<string> = ['state'];
  cliente = new Cliente();

  fields: Array<PoDynamicFormField> = [
    { property: 'cnpj',  placeholder: 'Filial Da Empresa' , order: 1,label: 'FILIAL', gridColumns: 2, gridSmColumns: 12, visible: true },
    //{ property: 'cnpj',  placeholder: 'Cnpj Da Empresa' , divider: 'PERSONAL DATA', order: 1,label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 4, gridSmColumns: 12, visible: true },

  ];


  constructor(
    private listaservico: ListaService,
  ) {}


  onCollapseDetail() {
    throw new Error('Method not implemented.');
  }

  decreaseTotal(row: any) {
    if (row.VALOR_TOTAL) {
      this.total -= row.VALOR_PENDENTE;
      this.totalall -= row.VALOR_TOTAL;
    }
  }

  sumTotal(row: any) {
    if (row.VALOR_TOTAL) {
     this.total += row.VALOR_PENDENTE;
     this.totalall += row.VALOR_TOTAL;

    }
  }

  sumalltotal(getSelectedRows: any){

    for(var i = 0; i < getSelectedRows.length; i++) {
      this.total += getSelectedRows[i].VALOR_PENDENTE;
   }

   for(var i = 0; i < getSelectedRows.length; i++) {
      this.totalall += getSelectedRows[i].VALOR_TOTAL;
 }


  }



  suballtotal(){
     this.totalall = 0
     this.total = 0

   }



  remove(item: { [key: string]: any }) {
  }

  ngOnInit(): void {

  }


// Função para exportar os dados para Excel
exportToExcel(): void {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Dados de Vendas');

  // Adiciona os dados da planilha
  worksheet.addRows(this.items);

  // Gera o arquivo Excel e inicia o download
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'RelatorioVendas.xlsx';
    link.click();
  });
}

onChangeFields(changeValue:any): PoDynamicFormValidation {

  if(changeValue.value.cnpj) {

  this.listaservico.pedidosliberados(changeValue.value.cnpj).subscribe(
    (dados: any) => {
      this.items = dados.items
     console.log(dados.items)

  for (let i = 0; i < this.items.length; i++) {
    this.items[i].ENTREGA = moment.utc(this.items[i].ENTREGA).format('yyyy-MM-DD')
              this.items[i].EMISSAO = moment.utc(this.items[i].EMISSAO).format('yyyy-MM-DD')
              this.items[i].LIBERADO = moment.utc(this.items[i].LIBERADO).format('yyyy-MM-DD')
              this.items[i].DT_LIB_GERENTE = moment.utc(this.items[i].DT_LIB_GERENTE).format('yyyy-MM-DD')
              this.items[i].DT_LIB_CREDITO = moment.utc(this.items[i].DT_LIB_CREDITO).format('yyyy-MM-DD')


 }
    },
    (error: any) => {

              this.listaservico.pedidosliberadoss(changeValue.value.cnpj).subscribe(
                (dados: any) => {
                  this.items = dados.items


      for (let i = 0; i < this.items.length; i++) {
        this.items[i].ENTREGA = moment.utc(this.items[i].ENTREGA).format('yyyy-MM-DD')
                  this.items[i].EMISSAO = moment.utc(this.items[i].EMISSAO).format('yyyy-MM-DD')
                  this.items[i].LIBERADO = moment.utc(this.items[i].LIBERADO).format('yyyy-MM-DD')
                  this.items[i].DT_LIB_GERENTE = moment.utc(this.items[i].DT_LIB_GERENTE).format('yyyy-MM-DD')
                  this.items[i].DT_LIB_CREDITO = moment.utc(this.items[i].DT_LIB_CREDITO).format('yyyy-MM-DD')


     }
              //   console.log(dados.items)
                },
                (error: any) => {
                  console.log(error)
                }
              )
    }
  )}




  return {}


}


}
