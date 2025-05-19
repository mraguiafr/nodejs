import { Component, Input, ViewChild } from '@angular/core';
import { PoComboOption, PoDynamicFormComponent, PoDynamicFormLoad, PoModalAction, PoModalComponent, PoTableComponent, poThemeDefaultActionsDark } from '@po-ui/ng-components';

import {  EventEmitter, Output, output } from '@angular/core';
import {  PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoDynamicViewField, PoNotificationService, PoRadioGroupOption, PoSearchFilterMode, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ListaService } from '../cliente/lista.service';
import { ApiserviceService } from '../cliente/apiservice.service';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';
import {CclienteService} from '../cliente/ccliente.service'
import { DuplicadosService } from '../pedidos/duplicado.service'; // Importe o serviço corretamente
import { CondicaoPagamentoService } from './../pedidos/condpag.service'; // Altere o caminho conforme o local do seu serviço
import { CurrencyPipe } from '@angular/common';
import { AtualizarService } from '../pedidos/atualizaitem.service'; // Importe o serviço
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {


  dynamicForm1!: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm1 = form;
  }

  resultadoSemDuplicatas: any[] | undefined;
  resultadoFiltrado: any
  i: Array<any> = []
  datamanual: Array<any> = []
  arrayitem: any
  produto:any = ''

condicoesPagamento: any[] = [];  // Variável para armazenar as condições de pagamento
CondPag = [{ code: '239', console: '10% ANTECIPADO' }]

filterKeys: Array<string> = ['NOMETRANS', 'CNPJTRANS', 'CODTRANS'];
peopleFiltered: Array<any> = [];
transbkp: Array<any> = [];
bodypedido: any



response: any
error:any

deletados: any

fdata = new Date()
valorFormatado!: string
iVlUnitario!: number;
iQtd!: number
iVltotal!: number
iTesitem!: string
iDtentrega!: string
prditems!: string
descitems!: string
cfopitem!: string
iItem!: string
umitems!: string
icfop!: string
orderDetail: string = '';
detail: any;
xEmissao: any

 // rowActions = {
 //   beforeInsert: this.onBeforeInsert.bind(this),
 //   beforeSave: this.onBeforeSave.bind(this),
 //   afterSave: this.onAfterSave.bind(this),
 // };

  [x: string]: any;

  clicnpjnovo = ''

  exibirGeral = false; // Começa mostrando a classe Geral
  exibirFaturas = false;
  exibirTransporte = false;
  exibirImpostos = false;
  TelaexibirGeral = false
  container = true
  VisualizaPv = false

  pedido: any

  person: any = {
    FILIAL: "",
    CLIENTE: "",
    LOJA: "",
    NOME: "",
    NOME2: "",
    ENDERECO: "",
    BAIRRO: "",
    TIPO: "",
    ESTADO: "",
    CEP: "",
    MUNICIPIO: "",
    DDD: "",
    TELEFONE: "",
    CNPJ: "",
    CONTATO: "",
    INSCRICAO: "",
    LIMITEC: null,
    CREDITOL: "",
    SALDOPV: null,
    MCOMPRA: null,
    PRIMEIROPV: null,
    ULTIMOPV: null,
    NCOMPRAS: null,
    SALDUPL: null,
    PAGATRA: null,
    EMAIL: "",
    ABERTURA: "",
    HABILITADO: "",
    SIMPLES: "",
    PESSOA: "",
    FINANCEIRO: null,
    DATACAD: "",
    BASE: "",
    EMISSAO: ""
  }















  persontransporte = {
    CODTRANS: "",
    NOMETRANS: "",
    CNPJTRANS: "",
    CONTATOTRA: "",
    TELTRANS: "",
    TPFRETE:""
  }


  personfaturas = {
    CONDPAG: "",
    BOLETO: ""
  }



  @Input() urlid: any = '';

  Displayauto = true;
  Displaymanual = true;


  dados:any

  items: Array<any> = []
  filteredtrans: Array<any> = []
  produtositems: Array<any> = []
  dadosp: Array<any> = []
  produtos: Array<any> = []
  produtoCopy:any


  // [this.listaservico.pedidos(this.urlid).subscribe(
  //   (dados: any) => {
  //     console.log(dados.items[0]);
  //     this.items = [
  //       {"codigo": dados.items[0].PRODUTO}
  //     ]

  //    console.log("teste")
  //   },
  //   (error: any) => {
  //     console.log(error)
  //   }
  // )]


  // items: Array<any> =  [
  // {   "item": '001',
  //     "codigo": '030001',
  //     "descricao": 'TESTE',
  //     "quantidade": 150,
  //     "id": 11234,
  //     "initials": 'BR',
  //     "country": 'Brazil',
  //     "value": 1000.0,
  //     "date": '2018-10-09',
  //     "returnDate": '2018-11-01',
  //     "class": 'Economic',
  //     "onBoardService": false,
  //     "destination": 'Rio de Janeiro',
  //     "airline": 'Azul',
  //     "status": 'available',
  //     "region": 'Financeiro',
  //   }
  // ];

  columns1: Array<PoTableColumn> = [
    // {
    //   property: 'STATUS',
    //   type: 'label',
    //   width: '25px',
    //   labels: [
    //     { value: '02', color: 'color-07', label: 'S/ESTOQUE' },
    //     { value: '  ', color: 'color-11', label: 'C/ESTOQUE' }

    //   ]
    // },

    //{ property: 'CLIENTE', label: 'CLIENTE',width: '100px' },
    //{ property: 'NOME', label: 'NOME' ,width: '200px'},
    //{ property: 'PEDIDO', label: 'PEDIDO' ,width: '100px'},
    //{ property: 'ITEM', label: 'ITEM' ,width: '50px'},
    { property: 'PRODUTO', label: 'PRODUTO' },
    { property: 'DESCRICAO', label: 'DESCRIÇÃO'},
    //{ property: 'UNID',label : 'UNIDADE'},
    //{ property: 'VENDIDO',label : 'VENDIDO', width: '20px' },
    //{ property: 'ENTREGUE',label : 'ENTREGUE', width: '20px' },
    //{ property: 'PENDENTE',label : 'PENDENTE', width: '20px' },
    //{ property: 'VALOR_UNITARIO', type: 'currency', format: 'R$', width: '25px' },
    //{ property: 'VALOR_PENDENTE', type: 'currency', format: 'R$', width: '25px' },
   // { property: 'VALOR_TOTAL', type: 'currency', format: 'R$', width: '25px' },
   // { property: 'OBS', label: 'OBSERVAÇÃO'},
    //{ property: 'EMISSAO', label: 'EMISSAO', type: 'date'},
   // { property: 'ENTREGA', label: 'ENTREGA', type: 'date'},
    //{ property: 'LOJA', label: 'LOJA', width: '10px' },
    //{ property: 'FAMILIA', label: 'FAMILIA', width: '20px' }

  ];
  total: number = 0;
  totalExpanded = 0;




  columnstransp: Array<PoTableColumn> = [
    // {
    //   property: 'STATUS',
    //   type: 'label',
    //   width: '25px',
    //   labels: [
    //     { value: '02', color: 'color-07', label: 'S/ESTOQUE' },
    //     { value: '  ', color: 'color-11', label: 'C/ESTOQUE' }

    //   ]
    // },

    //{ property: 'CLIENTE', label: 'CLIENTE',width: '100px' },
    //{ property: 'NOME', label: 'NOME' ,width: '200px'},
    //{ property: 'PEDIDO', label: 'PEDIDO' ,width: '100px'},
    //{ property: 'ITEM', label: 'ITEM' ,width: '50px'},
    { property: 'CODTRANS', label: 'Codigo' },
    { property: 'NOMETRANS', label: 'Nome'},
    { property: 'CNPJTRANS',label : 'Cnpj'},
    { property: 'CONTATOTRANS',label : 'Contato'},
    { property: 'TELTRANS',label : 'Telefone'},
    //{ property: 'VENDIDO',label : 'VENDIDO', width: '20px' },
    //{ property: 'ENTREGUE',label : 'ENTREGUE', width: '20px' },
    //{ property: 'PENDENTE',label : 'PENDENTE', width: '20px' },
    //{ property: 'VALOR_UNITARIO', type: 'currency', format: 'R$', width: '25px' },
    //{ property: 'VALOR_PENDENTE', type: 'currency', format: 'R$', width: '25px' },
   // { property: 'VALOR_TOTAL', type: 'currency', format: 'R$', width: '25px' },
   // { property: 'OBS', label: 'OBSERVAÇÃO'},
    //{ property: 'EMISSAO', label: 'EMISSAO', type: 'date'},
   // { property: 'ENTREGA', label: 'ENTREGA', type: 'date'},
    //{ property: 'LOJA', label: 'LOJA', width: '10px' },
    //{ property: 'FAMILIA', label: 'FAMILIA', width: '20px' }

  ];








////////////////////////////////////////////////////////////////////////////////////////////////


  validateFields: Array<string> = ['TIPOPEDIDO'];
  cliente = new Cliente();

  // DADOS PEDIDO -  GERAL

  fields: Array<PoDynamicFormField> = [
    { property: 'CLIENTE',  placeholder: 'Cliente' ,label: 'Cliente', gridColumns: 1, gridSmColumns: 1, visible: true },
    { property: 'CNPJ',  placeholder: 'Cnpj Da Empresa' , label: 'Cnpj', gridColumns: 2, gridSmColumns: 12, visible: true },
    {
      property: 'NOME',
      disabled: true,
      label: 'Nome',
      gridColumns: 4,
      gridSmColumns: 12,
      placeholder: 'Nome Da Empresa'
    },
     {
      property: 'PEDIDO',
      gridColumns: 3,
      disabled: true,
      gridSmColumns: 12,
      label: 'Pedido',
      placeholder: '003030'
    },
     {
      property: 'EMISSAO',
      label: 'Emissão',
      type: 'date',
      format: 'dd/MM/yyyy',
      gridColumns: 3,
      gridSmColumns: 6,
      disabled: false
    },
    { property: 'LOJA', label: 'Loja', gridColumns: 1 },
        {
      property: 'TIPOPEDIDO',
      label: 'Tipo Pedido',
      gridColumns: 6,
      options: [
        { state: 'Normal', code: 'N' },
        { state: 'Compl.ICMS', code: 'I' },
        { state: 'Dev.Compras', code: 'D' },
        { state: 'Utiliza Fornecedor', code: 'B' }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    {
      property: 'TIPOCLI',
      label: 'Tipo Cliente',
      gridColumns: 6,
      options: [
        { state: 'Cons.Final', code: 'F' },
        { state: 'Revendedor', code: 'R' },
        { state: 'Solidario', code: 'S' },
        { state: 'Exportar/Importar', code: 'X' }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'VENDEDOR',label: 'Vendedor', gridColumns: 6 },
    { property: 'MSGNOTA', gridColumns: 12,label: 'Msg Nota',rows: 2},

  ];


  fieldsFaturas: Array<PoDynamicFormField> = [
   // { property: 'cnpj',  placeholder: 'Cnpj Da Empresa' , order: 1,label: 'CNPJ', gridColumns: 2, gridSmColumns: 12, visible: true },
    //{ property: 'cnpj',  placeholder: 'Cnpj Da Empresa' , divider: 'PERSONAL DATA', order: 1,label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 4, gridSmColumns: 12, visible: true },
    // {
    //   property: 'CODPAG',
    //   disabled: true,
    //   minLength: 4,
    //   maxLength: 50,
    //   gridColumns: 4,
    //   gridSmColumns: 12,
    //   placeholder: 'Nome Da Empresa'
    // },
    {
      property: 'CONDPAG',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Condicao de Pagamento',
      options:  [
        { code: '239', state: '10% ANTECIPADO' },
        { code: '015', state: '100% ANTECIPADO' },
        { code: '135', state: '100% ANTECIPADO 7 DDL' },
        { code: '134', state: '100% ANTECIPADO AVISTA' },
        { code: '202', state: '100% ANTECIPADO AVISTA' },
        { code: '066', state: '105' },
        { code: '067', state: '120' },
        { code: '069', state: '14' },
        { code: '101', state: '14 DDL BOLETO' },
        { code: '118', state: '15 / 56 / 84 DDL BOLETO' },
        { code: '238', state: '20% ANTECIPADO' },
        { code: '070', state: '21' },
        { code: '102', state: '21 DDL BOLETO' },
        { code: '039', state: '25 % ANTECIPADO + 75 % AVISTA' },
        { code: '040', state: '25 % AVISTA + 28' },
        { code: '035', state: '25 % AVISTA + 28 / 35 / 42 / 49' },
        { code: '073', state: '25% A VISTA + 28/35/42/49/56' },
        { code: '152', state: '25% ANTECIPADO + 14 DDL BOLETO' },
        { code: '153', state: '25% ANTECIPADO + 21 DDL BOLETO' },
        { code: '161', state: '25% ANTECIPADO + 28 / 35 / 42 / 49 / 56 DDL BOLETO' },
        { code: '160', state: '25% ANTECIPADO + 28 / 35 / 42 / 49 DDL BOLETO' },
        { code: '162', state: '25% ANTECIPADO + 28 / 35 / 42 / 56 / 70 DDL BOLETO' },
        { code: '159', state: '25% ANTECIPADO + 28 / 35 / 42 DDL BOLETO' },
        { code: '158', state: '25% ANTECIPADO + 28 / 35 DDL BOLETO' },
        { code: '165', state: '25% ANTECIPADO + 28 / 42 / 56 / 70 DDL BOLETO' },
        { code: '164', state: '25% ANTECIPADO + 28 / 42 / 56 DDL BOLETO' },
        { code: '163', state: '25% ANTECIPADO + 28 / 42 DDL BOLETO' },
        { code: '167', state: '25% ANTECIPADO + 28 / 56 / 84 DDL BOLETO' },
        { code: '166', state: '25% ANTECIPADO + 28 / 56 DDL BOLETO' },
        { code: '154', state: '25% ANTECIPADO + 28 DDL BOLETO' },
        { code: '155', state: '25% ANTECIPADO + 35 DDL BOLETO' },
        { code: '156', state: '25% ANTECIPADO + 42 DDL BOLETO' },
        { code: '157', state: '25% ANTECIPADO + 56 DDL BOLETO' },
        { code: '151', state: '25% ANTECIPADO + 7 DDL BOLETO' },
        { code: '075', state: '25% ANTECIPADO AVISTA + 28/56' },
        { code: '020', state: '25% AVISTA 28/35/42/49/56' },
        { code: '001', state: '28' },
        { code: '002', state: '28 / 35' },
        { code: '003', state: '28 / 35 / 42' },
        { code: '030', state: '28 / 35 / 42' },
        { code: '110', state: '28 / 35 / 42 / 48 / 56 DDL BOLETO' },
        { code: '004', state: '28 / 35 / 42 / 49' },
        { code: '005', state: '28 / 35 / 42 / 49 / 56' },
        { code: '111', state: '28 / 35 / 42 / 49 / 56 / 70 DDL BOLETO' },
        { code: '109', state: '28 / 35 / 42 / 49 DDL BOLETO' },
        { code: '108', state: '28 / 35 / 42 DDL BOLETO' },
        { code: '107', state: '28 / 35 DDL BOLETO' },
        { code: '006', state: '28 / 42' },
        { code: '022', state: '28 / 42 / 49 / 56 / 63 / 70' },
        { code: '016', state: '28 / 42 / 56' },
        { code: '025', state: '28 / 42 / 56' },
        { code: '021', state: '28 / 42 / 56 / 65' },
        { code: '028', state: '28 / 42 / 56 / 70' },
        { code: '114', state: '28 / 42 / 56 / 70 DDL BOLETO' },
        { code: '113', state: '28 / 42 / 56 DDL BOLETO' },
        { code: '112', state: '28 / 42 DDL BOLETO' },
        { code: '007', state: '28 / 56' },
        { code: '034', state: '28 / 56' },
        { code: '024', state: '28 / 56 / 84' },
        { code: '116', state: '28 / 56 / 84 DDL BOLETO' },
        { code: '115', state: '28 / 56 BOLETO' },
        { code: '103', state: '28 DDL BOLETO' },
        { code: '219', state: '28 TED CARTEIRA' },
        { code: '077', state: '28,35,42' },
        { code: '031', state: '28/35/42/49/56/70' },
        { code: '036', state: '30' },
        { code: '050', state: '30' },
        { code: '061', state: '30' },
        { code: '017', state: '30 / 40' },
        { code: '071', state: '30 / 40 / 50 / 60' },
        { code: '051', state: '30 / 45' },
        { code: '052', state: '30 / 45 / 60' },
        { code: '053', state: '30 / 45 / 60 / 75' },
        { code: '054', state: '30 / 45 / 60 / 90' },
        { code: '055', state: '30 / 45 / 60 / 90 / 105' },
        { code: '056', state: '30 / 45 / 60 / 90 / 105 / 120' },
        { code: '057', state: '30 / 60' },
        { code: '058', state: '30 / 60 / 90' },
        { code: '059', state: '30 / 60 / 90 / 120' },
        { code: '060', state: '30 / 60 / 90 / 150' },
        { code: '072', state: '30% AVISTA + 28 / 56' },
        { code: '078', state: '30/40/50/60/70/80/90' },
        { code: '008', state: '35' },
        { code: '026', state: '35' },
        { code: '104', state: '35 DDL BOLETO' },
        { code: '033', state: '40 % A VISTA + 28 / 42 / 56' },
        { code: '105', state: '42 DDL BOLETO' },
        { code: '019', state: '45' },
        { code: '062', state: '45' },
        { code: '220', state: '45 TED CARTEIRA' },
        { code: '009', state: '50% + 50% AVISTA' },
        { code: '169', state: '50% ANTECIPADO + 14' },
        { code: '170', state: '50% ANTECIPADO + 21' },
        { code: '171', state: '50% ANTECIPADO + 28' },
        { code: '175', state: '50% ANTECIPADO + 28 / 35' },
        { code: '176', state: '50% ANTECIPADO + 28 / 35 / 42' },
        { code: '177', state: '50% ANTECIPADO + 28 / 35 / 42 / 49' },
        { code: '178', state: '50% ANTECIPADO + 28 / 35 / 42 / 49 / 56' },
        { code: '179', state: '50% ANTECIPADO + 28 / 35 / 42 / 56 / 70' },
        { code: '180', state: '50% ANTECIPADO + 28 / 42' },
        { code: '181', state: '50% ANTECIPADO + 28 / 42 / 56' },
        { code: '182', state: '50% ANTECIPADO + 28 / 42 / 56 / 70' },
        { code: '183', state: '50% ANTECIPADO + 28 / 56' },
        { code: '184', state: '50% ANTECIPADO + 28 / 56 / 84' },
        { code: '172', state: '50% ANTECIPADO + 35' },
        { code: '173', state: '50% ANTECIPADO + 42' },
        { code: '174', state: '50% ANTECIPADO + 56' },
        { code: '168', state: '50% ANTECIPADO + 7' },
        { code: '010', state: '50% AVISTA + 28' },
        { code: '011', state: '50% AVISTA + 28 / 35' },
        { code: '012', state: '50% AVISTA + 28 / 35 / 42' },
        { code: '013', state: '50% AVISTA + 28 / 35 / 42 / 49' },
        { code: '014', state: '50% AVISTA + 28 / 35 / 42 / 49 / 56' },
        { code: '023', state: '50% AVISTA + 28 / 35 / 42 / 49 / 56' },
        { code: '038', state: '50% AVISTA + 28 ENTREGA FUTURA' },
        { code: '076', state: '50% AVISTA ANTECIPADO 50% 28 DDL' },
        { code: '106', state: '56 DDL BOLETO' },
        { code: '018', state: '60' },
        { code: '063', state: '60' },
        { code: '221', state: '60 TED CARTEIRA' },
        { code: '068', state: '7' },
        { code: '100', state: '7 DDL BOLETO' },
        { code: '064', state: '75' },
        { code: '117', state: '7DDL BOLETO VENDA FUTURA 100% ANTECIPADO' },
        { code: '119', state: '7DDL BOLETO VENDA FUTURA 50% + 50 % NA ENTREGA' },
        { code: '029', state: '90' },
        { code: '065', state: '90' },
        { code: '222', state: '90 TED CARTEIRA' },
        { code: '032', state: 'A VISTA' },
        { code: '236', state: 'AMOSTRA GRATIS' },
        { code: '130', state: 'BOLETO VENDA FUTURA 50% ANTECIPADO + 28 / 42' },
        { code: '037', state: 'CADASTRO MANUAL' },
        { code: '400', state: 'CARTÃO CREDITO' },
        { code: '240', state: 'FORMA DE PAGAMENTO 12X CARTAO' },
        { code: '150', state: 'MANUAL COM ADIANTAMNETO' },
        { code: '001', state: 'ORCAMENTO' },
        { code: '027', state: 'PARCELAS MANUAIS' },
        { code: '237', state: 'REMESSA VENDA FUTURA' },
        { code: '202', state: 'TED ANTECIPADO 25% + TED FINALIZAÇÃO 75%' },
        { code: '185', state: 'TED ANTECIPADO 50% + TED FINALIZAÇÃO 50%' },
        { code: '120', state: 'VENDA PARA ENTRAGA FUTURA 50% + 25% + 25%' }
      ],
      optionsMulti: false,
       fieldLabel: 'state',
      fieldValue: 'code'

    },
    {
      property: 'BOLETO',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Forma de Pagamento',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Boleto', code: '1' },
        { console: 'Cartao', code: '4' },
        { console: 'Carteira', code: '3' },
        { console: 'Pix', code: '2' },
        { console: 'TED', code: '5' },
        { console: 'DOC', code: '6' }
      ],
      optionsMulti: false
    },
  ];

  fieldsImpostos: Array<PoDynamicFormField> = [
     {
      property: 'IMPOSTOS',
      gridColumns: 3,
      gridSmColumns: 12,
      label: 'IMPOSTOS'
    },
      { property: 'IPI',label: 'IPI', gridColumns: 6 },
  ];


  // transportadora

  fieldsTransporte: Array<PoDynamicFormField> = [
     {
      property: 'TPFRETE',
      label: 'Tipo Frete',
      gridColumns: 3,
      options: [
        { state: 'CIF', code: 'C' },
        { state: 'FOB', code: 'F' },
        { state: 'Sem frete', code: 'S' },
        { state: 'Por Conta Teceireiro', code: 'T' }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'PESO',  placeholder: 'Peso' , label: 'Peso', gridColumns: 3, gridSmColumns: 1, visible: true },
    { property: 'VOLUME',  placeholder: 'volume' ,label: 'Volume', gridColumns: 3, gridSmColumns: 1, visible: true },
    {
      property: 'EMBALAGEM',
      label: 'Embalagem',
      gridColumns: 3,
      options: [
        { state: 'Caixa', code: 'C' },
        { state: 'Saco', code: 'S' },
        { state: 'Filme Stretch', code: 'F' },
        { state: 'Pallet', code: 'P' }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'CODTRANS',  placeholder: 'Codigo' ,label: 'Codigo', gridColumns: 2, gridSmColumns: 1, visible: true },
    { property: 'CNPJTRANS',  placeholder: 'Cnpj Transportadora' ,label: 'Cnpj', gridColumns: 3, gridSmColumns: 12, visible: true },
    {
      property: 'NOMETRANS',
       gridColumns: 3,
      label: 'Transportadora',
      placeholder: 'Nome Da Transportdora'
    },
    { property: 'CONTATOTRANS', label: 'Contato', gridColumns: 2 },
    { property: 'TELTRANS', gridColumns: 2, mask: '(999) 99999-9999', label: 'Telefone' },
    {property: 'obstrans',  placeholder: 'Observaçao para Transportador' ,label: 'Obs Transportador', gridColumns: 12, gridSmColumns: 1, visible: true }
  ];


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  columnsmanual: Array<PoTableColumn> = [
    { property: 'ITEM', label: 'Item' },
    { property: 'PRODUTO', label: 'Código'},
    { property: 'UNIDADE', label: 'Unidade' },
    { property: 'VENDIDO', label: 'Quantidade' },
    { property: 'VALOR_UNITARIO', label: 'Preço Unitario',type: 'currency', format: 'BRL' },
    { property: 'VALOR_TOTAL', label: 'Valor Total',type: 'currency', format: 'BRL' },
    { property: 'DESCRICAO', label: 'Descrição' },
    { property: 'ENTREGA', label: 'Entraga' ,  type: 'date',format: 'dd/MM/yyyy'},
    { property: 'CFOP', label: 'Saida' },



  ];


///////////////////////////////////////////////////////////////////
////
/////////////////////////////////////////////////////////////////////////////
  columns: Array<PoTableColumn> = [
    {
      property: 'STATUS',
      type: 'subtitle',
      width: '180px',
      subtitles: [
        { value: 0 , color: 'color-09', label: 'Pedido Aguardando Gerente', content: 'LG'},
        { value: 0 , color: 'color-03', label: 'Liberado Para Faturar', content: 'LF'},
        { value: 4 , color: 'color-04', label: 'Bloqueado Financeiro', content: 'BF'},
        //{ value: 4 , color: 'color-04', label: 'Bloqueado Financeiro', content: 'BF'},
        //{ value: 4 , color: 'color-01', label: 'Credito Vencido', content: 'CV'},
        { value: 9 , color: 'color-02', label: 'Bloqueado Na Analise', content: 'BA'},
        { value: 10 , color: 'color-07', label: 'Pedido Faturado ', content: 'PF'},
      ]
    },
    { property: 'FILIAL', label: 'Filial' },
    { property: 'CLIENTE', label: 'Cliente' , type:'link',
      link: '/documentation/po-select',
      action: () => this.poNotification.error('Exibe Cliente')
     },
     { property: 'PEDIDO', label: 'Pedido', type:'link',
      link: '/documentation/po-select',
      action: () => this.poNotification.error('Exibe Pedido')
     },
     { property: 'NOME', label: 'Nome Cliente' },
     { property: 'EMISSAO', label: 'Data Emisão', format: '99-99-9999'},
     { property: 'NOTA', label: 'Nota Fiscal' , type:'link',
      link: '/documentation/po-select',
      action: () => this.poNotification.error('Exibe Nota')
     },
     { property: 'VENDEDOR', label: 'Vendedor' }
  ];


  parentVariable: string = 'Valor vindo do Pai';

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent | undefined;
  @ViewChild('userDetailModal') userDetailModal!: PoModalComponent;
  @ViewChild('AddClienteModal') AddClienteModal!: PoModalComponent;
  @ViewChild('Addtransporte') Addtransporte!: PoModalComponent;


  @ViewChild('itemModal') itemModal!: PoModalComponent;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable!: PoTableComponent;

  valorDeX: string = 'algumValor';


  CnpjDetalhes:any
  itemsCpy: Array<any> = []
  searchTerm = ''
  searchTermp = ''
Analisec: any;
isLoggedIn: boolean = false
isdetal: boolean = false
modalTerm: boolean = true
content: any

Codigo: any
Loja: any
Filial:any

detailedHotel: any;

alteradados: any

topedidos = false;
tosalvar = false
tonotas = false
totitulos = false
codarray = true


exibearray = false
fieldsbkp: any


// ALTERA PEDIDOS

actions: Array<PoTableAction> = [
  { action: this.alterar.bind(this), icon: 'po-icon ph ph-trash', label: 'Alterar' },
  { action: this.VisualizarPv.bind(this), icon: 'ph ph-info', label: 'Visualizar' },
  { action: this.remover.bind(this), icon: 'ph ph-info', label: 'Excluir' },
  { action: this.remove.bind(this), icon: 'po-icon ph ph-trash', label: 'Financeiro' }


];


// ALTERA ITEM

actionsitens: Array<PoTableAction> = [
  { action: this.Alteraitem.bind(this), icon: 'po-icon ph ph-trash', label: 'Alterar' },
  { action: this.removeitem.bind(this), icon: 'po-icon ph ph-trash', label: 'Remover' },
  { action: this.OpenModalDetalhes.bind(this), icon: 'ph ph-info', label: 'Resumido' },
  { action: this.details.bind(this), icon: 'ph ph-info', label: 'Details' },

];




personalterar = {};


constructor(
  private http: HttpClient,
  private atualizarService:AtualizarService,
  private currencyPipe: CurrencyPipe,
  private listaservico: ListaService,
  private service: ApiserviceService,
  private clienteService:ClienteService,
  private router: Router,
  public poNotification: PoNotificationService,
  private CclienteService: CclienteService,
  private DuplicadosService: DuplicadosService,
  private condicaoPagamentoService: CondicaoPagamentoService


) {}

filteredItems = [...this.items]; // Inicialmente, todos os itens estão visíveis
filteredprodutos = [...this.produtositems]; // Inicialmente, todos os itens estão visíveis


ngOnInit(): void {

  //  this.condicoesPagamento = this.condicaoPagamentoService.getCondicoesPagamento();
  // console.log(this.condicaoPagamentoService.options)
  // this.CondPag = this.condicaoPagamentoService.options

  if (this.itemsCpy.length === 0){
   // console.log("origem")
    //console.log(this.searchTerm)
    //console.log(this.filteredItems)
     this.listaservico.listarpedidos(this.searchTerm).subscribe(
       (dados: any) => {
         this.items = dados.items
         console.log(this.items)
         this.itemsCpy = this.items

          this.resultadoSemDuplicatas = this.DuplicadosService.eliminarDuplicatas(this.items);
          console.log(this.resultadoSemDuplicatas);

          //  console.log(this.itemsCpy)
          this.items = this.resultadoSemDuplicatas
            this.filteredItems = this.resultadoSemDuplicatas


       },
       (error: any) => {
        }
     )
    }else{


      console.log(this.searchTerm)
    console.log(this.filteredItems)
      // Verifica se a string não está vazia e não é nula ou indefinida
      const stringValida = typeof this.searchTerm === 'string' && this.searchTerm.trim() !== '';

      // Verifica se o array não está vazio, não é nulo ou indefinido, e se é de fato um array
      const arrayValido = Array.isArray(this.filteredItems) && this.filteredItems.length > 0;

        if (stringValida && arrayValido) {
          console.log("ENTROU DENTRO")


          this.person = []
       }else{



          if(this.searchTerm.length != 0 || this.filteredItems.length === 0){
            console.log("entrou no busca")
                this.listaservico.listacliente(this.searchTerm).subscribe(
                  (dados: any) => {
                    this.items = dados.items

                        console.log(this.items)

                         if (!this.items || !this.items.length){
                          console.log(this.searchTerm)
                          this.content = this.searchTerm

                          console.log("CNPJ NAO ENCONTRADO")
                          this.userDetailModal.open();


                        }

                       console.log(this.itemsCpy)
                       console.log("BUSCA")
                        this.searchTerm = ''
                       this.filteredItems = [...this.items];

                  },
                  (error: any) => {
                   }
                )

              }else{

                      this.items = this.itemsCpy
                      console.log("copia")
                      console.log(this.searchTerm)
                      console.log(this.filteredItems)
                         console.log(this.items)
                         console.log(this.itemsCpy)
                         this.filteredItems = this.items
              }

         }
      }


}




filterItems(): void {

  if (this.searchTerm.length < 2) {
    this.filteredItems = [...this.items]; // Mostra todos os itens se menos de 2 caracteres forem digitados
    return;
  }

  if (!this.searchTerm) {
    this.filteredItems = [...this.items];
  } else {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.PEDIDO.toLowerCase().includes(searchLower) ||
      item.CLIENTE.toLowerCase().includes(searchLower) ||
      item.VENDEDOR.toLowerCase().includes(searchLower) ||
      item.NOME.toLowerCase().includes(searchLower) ||
      item.DESCRICAO.toLowerCase().includes(searchLower) ||
      item.NOTA.toLowerCase().includes(searchLower)
    );
  }
}


filterProduto(): void {

  if (this.searchTermp?.length < 2) {
    this.filteredprodutos = [...this.produtositems]; // Mostra todos os itens se menos de 2 caracteres forem digitados
    return;
  }

  if (this.searchTermp?.length < 1) {
    this.filteredprodutos = [...this.produtoCopy]; // Mostra todos os itens se menos de 2 caracteres forem digitados
    return;
  }

  if (!this.searchTermp) {
    this.filteredprodutos = [...this.produtoCopy];
  } else {
    const searchTerms = this.searchTermp.toLowerCase().split(' '); // Divide o termo de busca em palavras
    this.filteredprodutos = this.produtositems.filter(item => {
      const descricaoLower = item.DESCRICAO?.toLowerCase() || ''

      // Verifica se todas as palavras estão presentes na DESCRICAO ou CODIGO
      return searchTerms.every(term =>
        descricaoLower.includes(term)
      );
    });
  }
}




confirm: PoModalAction = {
  action: () => {
    this.closeModal();
  },
  label: 'Confirmar'
};

close: PoModalAction = {
 action: () => {
   this.closeModal();
 },
 label: 'Sair',
 danger: true
 };



confirm3: PoModalAction = {
  action: () => {
    this.Addtransporte.close();
  },
  label: 'Confirmar'
};


close3: PoModalAction = {
 action: () => {
  this.Addtransporte.close();
 },
 label: 'Sair',
 danger: true
 };


closeModal() {
this.poModal.close();
}



confirm1(){


    // console.log(this.iVlUnitario)
    // console.log(this.iQtd)
    // console.log(this.iVltotal)
    // console.log(this.iTesitem)
    // console.log(this.prditems)
    // console.log(this.descitems)
    // console.log(this.cfopitem)
    // console.log(this.iItem)
    // console.log(this.umitems)
    console.log(this.iDtentrega)


  if (this.iVlUnitario !== 0 &&
    this.iQtd !== 0 &&
    this.iVltotal !== 0 &&
    //this.iTesitem && this.iTesitem.trim() !== '' &&
    this.prditems && this.prditems.trim() !== '' &&
    this.descitems && this.descitems.trim() !== '') {

    console.log('Todos os valores estão preenchidos corretamente.');


    console.log('conforma add items')
// console.log(this.iVlUnitario)
// console.log(this.iQtd)
// console.log(this.iVltotal)
// console.log(this.iTesitem)
 console.log(this.iDtentrega)
// console.log(this.prditems)
//console.log(this.datamanual)
// console.log(this.arrayitem)
// console.log(this.person)
// console.log(this.iItem)

const dat =  this.convertData(this.iDtentrega)
console.log(dat)

console.log(this.dynamicForm1.form.value.CLIENTE)
console.log(this.dynamicForm1.form.value)
this.xEmissao = this.dynamicForm1.form.value.EMISSAO

if (this.arrayitem > 0){

let valorNumero: number = parseInt(this.iItem, 10); // Converte a string para número
this.iItem = (valorNumero + 1).toString(); // Soma 1 e converte de volta para string

console.log(this.iItem)
  console.log("TEM DADOS")
  this.arrayitem = this.arrayitem.concat(
    {
      BOLETO: this.dynamicForm1.form.value.BOLETO,
      C5_XMSGNF2: "",
      CFOP:this.cfopitem,
      TES:this.iTesitem,
      CLIENTE:this.dynamicForm1.form.value.CLIENTE,
      CNPJ:this.dynamicForm1.form.value.CNPJ,
      CONDPAG:this.dynamicForm1.form.value.CONDPAG,
      CREDITO:0,
      DESCRICAO:this.descitems,
      DT_LIB_CREDITO:"",
      DT_LIB_GERENTE:"",
      EMISSAO:this.xEmissao,
      ENTREGA:dat,
      ENTREGUE:0,
      FILIAL:this.Filial,
      ITEM:this.iItem,
      LOJA:this.dynamicForm1.form.value.LOJA,
      MSGNOTA:this.dynamicForm1.form.value.MSGNOTA,
      MSGNOTA2:this.dynamicForm1.form.value.MSGNOTA,
      NOME:this.dynamicForm1.form.value.NOME,
      NOTA:"",
      OBSERVACAO:this.orderDetail   ,
      PEDIDO:this.dynamicForm1.form.value.PEDIDO,
      PENDENTE:0,
      PRODUTO:this.prditems,
      STATUS:0,
      UNIDADE:this.umitems,
      VALOR_PENDENTE:0,
      VALOR_TOTAL:this.iVltotal,
      VALOR_UNITARIO:this.iVlUnitario,
      VENDEDOR:this.dynamicForm1.form.value.VENDEDOR,
      VENDIDO:this.iQtd
      }

  )
}else{
  console.log(this.iItem)
this.iItem = (this.datamanual.length + 1).toString().padStart(2, '0');
this.arrayitem = [ {
  BOLETO: this.dynamicForm1.form.value.BOLETO,
  C5_XMSGNF2: "",
  CFOP:this.cfopitem,
  TES:this.iTesitem,
  CLIENTE:this.dynamicForm1.form.value.CLIENTE,
  CNPJ:this.dynamicForm1.form.value.CNPJ,
  CONDPAG:this.dynamicForm1.form.value.CONDPAG,
  CREDITO:0,
  DESCRICAO:this.descitems,
  DT_LIB_CREDITO:"",
  DT_LIB_GERENTE:"",
  EMISSAO:this.xEmissao,
  ENTREGA:dat,
  ENTREGUE:0,
  FILIAL:this.Filial,
  ITEM:this.iItem,
  LOJA:this.dynamicForm1.form.value.LOJA,
  MSGNOTA:this.dynamicForm1.form.value.MSGNOTA,
  MSGNOTA2:this.dynamicForm1.form.value.MSGNOTA,
  NOME:this.dynamicForm1.form.value.NOME,
  NOTA:"",
  OBSERVACAO:this.orderDetail   ,
  PEDIDO:this.dynamicForm1.form.value.PEDIDO,
  PENDENTE:0,
  PRODUTO:this.prditems,
  STATUS:0,
  UNIDADE:this.umitems,
  VALOR_PENDENTE:0,
  VALOR_TOTAL:this.iVltotal,
  VALOR_UNITARIO:this.iVlUnitario,
  VENDEDOR:this.dynamicForm1.form.value.VENDEDOR,
  VENDIDO:this.iQtd
  }
]}

this.datamanual = this.datamanual.concat(this.arrayitem)

    console.log('conforma add items')
    console.log(this.arrayitem)

this.iVlUnitario = 0
this.iQtd = 0
this.iVltotal = 0
this.valorFormatado = ''
this.prditems = ""
this.descitems = ""
this.cfopitem = ""
this.iTesitem = ''
this.orderDetail = ""
this.iItem = ""
this.umitems = ''
this.arrayitem = []
this.produtoCopy = []
this.produtositems = []
this.filteredprodutos = []
let xEmissao = ''
let valorNumero = ''
 this.xEmissao =''



this.poNotification.success('Item incluido com Sucesso!');
this.userDetailModal.close();

} else {

  this.poNotification.error('Algum valor está vazio ou incorreto.');
}


};


confirm4(){

  console.log(this.iVlUnitario)
  console.log(this.iQtd)
  console.log(this.iVltotal)
  console.log(this.iTesitem)
  console.log(this.prditems)
  console.log(this.descitems)
  console.log(this.cfopitem)
  console.log(this.iItem)
  console.log(this.iDtentrega)
  console.log(this.umitems)


// Atualiza a descrição do ITEM "2" e PRODUTO "041116"
this.datamanual = this.atualizarService.atualizarDescricao(this.datamanual, this.iItem, this.prditems, this.iQtd,this.iVlUnitario,this.iVltotal,this.cfopitem,this.iTesitem,this.iDtentrega);
//this.datamanual = this.atualizarService.atualizarDescricao(this.datamanual, this.iItem, this.prditems, this.iQtd,this.iVlUnitario,this.iVltotal,this.cfopitem,this.iTesitem);
                                                                                          //novaqtdvem: number ,novavlunit: number, novavltotal: number, novasaida: string , novaentrega: string): any[] {
console.log(this.datamanual); // Verifique o resultado no console


  this.iVlUnitario = 0
  this.iQtd = 0
  this.iVltotal = 0
  this.iTesitem = ""
  this.prditems = ""
  this.descitems = ""
  this.cfopitem = ""
  this.orderDetail = ""
  this.iItem = ""
  this.umitems = ''
  this.arrayitem = []


this.poNotification.success('Item Alterado com Sucesso!');

// this.userDetailModal.close();

// } else {

// this.poNotification.error('Algum valor está vazio ou incorreto.');
// }

this.itemModal.close();

};

public readonly accompanimentOptions: Array<PoComboOption> = [

{ value:'403',label:'403 - DEVOLUCAO DE VENDA ADQUIRIDA OU RECEBIDA DE TERCEIROS CONTRIBUINTE                         '},
{ value:'404',label:'404 - DEVOLUCAO DE VENDA ADQUIRIDA OU RECEBIDA DE TERCEIROS N CONTRIBUINTE                       '},
{ value:'422',label:'422 - TRANSFERÊNCIA DE MERCADORIA ADQUIRIDA OU RECEBIDA DE TERCEIROS                             '},
{ value:'903',label:'903 - VENDA DE MERCADORIA ADQUIRIDA OU RECEBIDA DE TERCEIROS CONTRIBUINTE                        '},
{ value:'904',label:'904 - SIMPLES FATURAMENTO VENDA ENTREGA FUTURA S CONTRIBUINTE                                    '},
{ value:'905',label:'905 - REMESSA ENCOMENDA PARA ENTREGA FUTURA S CONTRIBUINTE                                       '},
{ value:'906',label:'906 - VENDA DE MERCADORIA ADQUIRIDA OU RECEBIDA DE TERCEIROS N CONTRIBUINTE                      '},
{ value:'907',label:'907 - AMOSTRA GRATIS                                                                             '},
{ value:'911',label:'911 - COMPLEMENTO DE ICMS                                                                        '},
{ value:'912',label:'912 - VENDA DE MERCADORIA ADQUIRIDA OU RECEBIDA DE TERCEIROS CONTRIBUINTE  USO CONSUMO           '},
{ value:'922',label:'922 - TRANSFERÊNCIA DE MERCADORIA ADQUIRIDA OU RECEBIDA DE TERCEIROS                             '},
{ value:'950',label:'950 - Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação '},
{ value:'951',label:'951 - VENDA MERCADORIA RECEBIDA TERCEIROS PARA EXPORTACAO                                        '},

];


public readonly CfopOptions: Array<PoComboOption> = [

  { value:'403',label:'1202'},
  { value:'404',label:'2202'},
  { value:'422',label:'2152'},
  { value:'903',label:'5102'},
  { value:'904',label:'5922'},
  { value:'905',label:'5117'},
  { value:'906',label:'6108'},
  { value:'907',label:'6911'},
  { value:'911',label:'5102'},
  { value:'912',label:'5102'},
  { value:'922',label:'5152'},
  { value:'950',label:'5502'},
  { value:'951',label:'5502'},

  ];


  close1() {
    this.i = []
    this.userDetailModal.close();
    this.ngOnInit()
  }


  close4() {
  this.iVlUnitario = 0
  this.iQtd = 0
  this.iVltotal = 0
  this.iTesitem = ""
  this.prditems = ""
  this.descitems = ""
  this.cfopitem = ""
  this.orderDetail = ""
  this.iItem = ""
  this.umitems = ''
  this.arrayitem = []

    this.itemModal.close();
  }


  confirm2: PoModalAction = {
    action: () => {

      console.log(this.clicnpjnovo)
      this.service.postCliente(this.clicnpjnovo).subscribe(
        (dados: any) => {
         console.log(dados)

         this.onChangeFields(this.clicnpjnovo)
         this.AddClienteModal.close();
        })


    },
    label: 'Confirmar'
  };



  close2: PoModalAction = {
    action: () => {
     this.AddClienteModal.close();

    },
    label: 'Sair',
    danger: true
    };



 OpenModalDetalhes(item: { [key: string]: any }) {
  //  console.log(Object.values(item))
   // console.log(Object.values(item)[13])

    this.poModal.open()
  }

  remove(item: { [key: string]: any }) {

    this.content = item['Cnpj']
    this.Codigo  = item['Codigo']
    this.Loja    = item['Loja']
    this.Filial  = item['Filial']


    this.router.navigate(['/areceber'], { state: { data: this.content,codigo: this.Codigo,loja: this.Loja,filial: this.Filial } });

  }


  deleteItems(items: Array<any>) {
    this.items = items;
  }


  alterar(item: { [key: string]: any }) {


    this.exibirGeral = true
    this.container = false
  this.TelaexibirGeral = true



    this.pedido  = item['PEDIDO']
    const status  = item['STATUS']

    console.log(status)

    if (status === 10){

    }else{
    console.log(this.pedido)
    console.log(this.itemsCpy)

     // Função para filtrar o array por número de pedido
   this.resultadoFiltrado = this.filtrarPorPedido(this.itemsCpy, this.pedido);
    console.log(this.resultadoFiltrado);
    this.datamanual = this.resultadoFiltrado

    this.person = this.resultadoFiltrado[0]
    this.persontransporte = this.resultadoFiltrado[0]
    this.personfaturas = this.resultadoFiltrado[0]

    }

  }



  VisualizarPv(item: { [key: string]: any }) {

    this.VisualizaPv = true
    this.pedido  = item['PEDIDO']
    const status  = item['STATUS']


     // Função para filtrar o array por número de pedido
   this.resultadoFiltrado = this.filtrarPorPedido(this.itemsCpy, this.pedido);
   this.datamanual = this.resultadoFiltrado

    this.person = this.resultadoFiltrado[0]
    this.persontransporte = this.resultadoFiltrado[0]
    this.personfaturas = this.resultadoFiltrado[0]


  this.TelaexibirGeral = true
  this.exibirGeral = true
  this.container = false

    this.poNotification.information('Voçê Esta Em Visualizar')

  }

  remover(item: { [key: string]: any }) {

    this.pedido  = item['PEDIDO']
    const status  = item['STATUS']

    console.log(item)

    if (status === 0){

let bodypedidoArray: any[] = []; // Array para armazenar múltiplos pedidos


interface PedidoItem {
  C6_ITEM: string;
  C6_PRODUTO: string;
  C6_DESCRI: string;
  C6_XOBS: string;
  C6_QTDVEN: number;
  C6_QTDENT: number;
  C6_PRCVEN: number;
  C6_VALOR: number;
  C6_PRUNIT: number;
  C6_ENTREG: string;
  C6_TES: string;
}

interface PedidoGeral {
  C5_FILIAL: string;
  C5_NUM: string;
  C5_XCGC: string;
  C5_CLIENTE: string;
  C5_LOJACLI: string;
  C5_CLIENT: string;
  C5_LOJAENT: string;
  C5_TIPO: string;
  C5_TRANSP: string;
  C5_TIPOCLI: string;
  C5_CONDPAG: string;
  C5_TABELA: string;
  C5_VEND1: string;
  C5_EMISSAO: string;
  C5_TPFRETE: string;
  C5_FRETE: number;
  C5_MENNOTA: string;
  C5_BLQ: string;
  C5_XBOLETO: string;
  C5_XMSGNF2: string;
  C5_XTOTAL: number;
  C5_XUF: string;
  itens: PedidoItem[];
}

// Definindo o pedidoGeral com a interface PedidoGeral
let pedidoGeral: PedidoGeral = {
  C5_FILIAL: '07',
  C5_NUM: item['PEDIDO'],
  C5_XCGC: 'EXCLUIR',
  C5_CLIENTE: item['CLIENTE'],
  C5_LOJACLI: item['PEDIDO'],
  C5_CLIENT: item['CLIENTE'],
  C5_LOJAENT: item['LOJA'],
  C5_TIPO: item['TIPOPEDIDO'],
  C5_TRANSP: '',
  C5_TIPOCLI: '',
  C5_CONDPAG: item['CONDPAG'] ,
  C5_TABELA: "",
  C5_VEND1: '',
  C5_EMISSAO: '',
  C5_TPFRETE: '',
  C5_FRETE: 0,
  C5_MENNOTA: '',
  C5_BLQ: "",
  C5_XBOLETO: '',
  C5_XMSGNF2: '',
  C5_XTOTAL: 0,
  C5_XUF: '',
  itens: [] // Inicializando o array de itens
};


// Adicionar o pedido ao array de pedidos
bodypedidoArray.push(pedidoGeral);


console.log(pedidoGeral)
console.log(bodypedidoArray)

//console.log(this.bodypedido)

this.enviarPedido(bodypedidoArray)


    }else{
    console.log(this.pedido)


    }
    this.VisualizaPv = false

  }


//////////////////////////////////////////////////////////////////////////////////////////////

 // Função para filtrar o array por número de pedido
 filtrarPorPedido(array: any[], pedido: string): any[] {
  return array.filter(item => item.PEDIDO === pedido);
}



onCollapseDetail() {
  throw new Error('Method not implemented.');
}
decreaseTotal(row: any) {
  console.log("decrementa")
  // if (row.VALOR) {
  //   this.total -= row.VALOR;
  // }
}

details(item:any) {
  this.detail = item;
  this.poModal.open();
}

removeitem(item: { [key: string]: any }) {

  console.log(this.datamanual)
  console.log(item)
  this.poTable.removeItem(item);

  this.datamanual.forEach((manualItem: any) => {
    // Verifica se o valor de C6_ITEM em datamanual é igual ao valor de item['ITEM']
    if (manualItem.ITEM === item['ITEM']) {
        manualItem.OBSERVACAO = "DELETA";
    }
  });


//   const index = this.datamanual.indexOf(item)
// if (index > -1) {
//   this.datamanual.splice(index, 1);
// }

  console.log(this.datamanual)
}

removetemlista(row: any) {

    this.prditems = ''
    this.descitems = ''
    this.umitems = ''
}


additemlista(row: any) {

  this.prditems = row.PRODUTO
  this.descitems = row.DESCRICAO
  this.umitems = row.UNIDADE


if (row.VALOR) {
  this.total += row.VALOR;
}
}


readData:any;



SalvarPedido() {

  if(this.VisualizaPv){
    this.poNotification.information("Voçê Esta Em Visualizar")}
  else{

  //console.log(this.dynamicForm1)
  console.log(this.datamanual)
  //console.log(this.datamanual[0].ENTREGA)
  //console.log(this.persontransporte)
  //console.log(this.persontransporte.TPFRETE)
  //console.log(this.persontransporte.CODTRANS)
  //console.log(this.personfaturas)
  //console.log(this.datamanual.length)

  const obj = this.personfaturas
  console.log(obj.CONDPAG)

if(this.datamanual.length ===0){
  this.poNotification.error('Faltam Itens')
}{
const formattedDate = this.convertDate(this.datamanual[0].ENTREGA);
const dateamissao = this.convertDate(this.dynamicForm1.form.value.EMISSAO);
console.log(dateamissao)
console.log(formattedDate)

const dtentrega = formattedDate//this.Dataenviapv(formattedDate)
const dtemissao = this.Dataenviapv(dateamissao)
const PEDIDO = this.datamanual[0].PEDIDO || ''

console.log(dtentrega)
console.log(dtemissao)
console.log(this.dynamicForm1.form.value.CLIENTE)

let bodypedidoArray: any[] = []; // Array para armazenar múltiplos pedidos


interface PedidoItem {
  C6_ITEM: string;
  C6_PRODUTO: string;
  C6_DESCRI: string;
  C6_XOBS: string;
  C6_QTDVEN: number;
  C6_QTDENT: number;
  C6_PRCVEN: number;
  C6_VALOR: number;
  C6_PRUNIT: number;
  C6_ENTREG: string;
  C6_TES: string;
}

interface PedidoGeral {
  C5_FILIAL: string;
  C5_NUM: string;
  C5_XCGC: string;
  C5_CLIENTE: string;
  C5_LOJACLI: string;
  C5_CLIENT: string;
  C5_LOJAENT: string;
  C5_TIPO: string;
  C5_TRANSP: string;
  C5_TIPOCLI: string;
  C5_CONDPAG: string;
  C5_TABELA: string;
  C5_VEND1: string;
  C5_EMISSAO: string;
  C5_TPFRETE: string;
  C5_FRETE: number;
  C5_MENNOTA: string;
  C5_BLQ: string;
  C5_XBOLETO: string;
  C5_XMSGNF2: string;
  C5_XTOTAL: number;
  C5_XUF: string;
  itens: PedidoItem[];
}

// Definindo o pedidoGeral com a interface PedidoGeral
let pedidoGeral: PedidoGeral = {
  C5_FILIAL: '07',
  C5_NUM: PEDIDO,
  C5_XCGC: this.dynamicForm1.form.value.CNPJ,
  C5_CLIENTE: this.dynamicForm1.form.value.CLIENTE,
  C5_LOJACLI: this.dynamicForm1.form.value.LOJA,
  C5_CLIENT: this.dynamicForm1.form.value.CLIENTE,
  C5_LOJAENT: this.dynamicForm1.form.value.LOJA,
  C5_TIPO: this.dynamicForm1.form.value.TIPOPEDIDO,
  C5_TRANSP: "000001",
  C5_TIPOCLI: this.dynamicForm1.form.value.TIPOCLI,
  C5_CONDPAG: obj.CONDPAG,
  C5_TABELA: "",
  C5_VEND1: '000001',
  C5_EMISSAO: dtemissao,
  C5_TPFRETE: this.persontransporte.TPFRETE,
  C5_FRETE: 0,
  C5_MENNOTA: this.datamanual[0].MSGNOTA,
  C5_BLQ: "",
  C5_XBOLETO: obj.BOLETO,
  C5_XMSGNF2: this.datamanual[0].MSGNOTA2,
  C5_XTOTAL: 9999,
  C5_XUF: 'SP',
  itens: [] // Inicializando o array de itens
};

// Loop para adicionar os itens (C6_*) ao array "itens"
for (let i = 0; i < this.datamanual.length; i++) {

  let entrega = this.datamanual[i].ENTREGA; // '2024-10-20'
let [ano, mes, dia] = entrega.split('-');
entrega = `${ano}${mes}${dia}`;

  let item: PedidoItem = {
    C6_ITEM: this.datamanual[i].ITEM,
    C6_PRODUTO: this.datamanual[i].PRODUTO,
    C6_DESCRI: this.datamanual[i].DESCRICAO,
    C6_XOBS: this.datamanual[i].OBSERVACAO,
    C6_QTDVEN: Number(this.datamanual[i].VENDIDO),
    C6_QTDENT: Number(this.datamanual[i].ENTREGUE),
    C6_PRCVEN: Number(this.datamanual[i].VALOR_UNITARIO),
    C6_VALOR: Number(this.datamanual[i].VALOR_TOTAL),
    C6_PRUNIT: Number(this.datamanual[i].VALOR_UNITARIO),
    C6_ENTREG: entrega,
    C6_TES: this.datamanual[i].TES
  };

  // Adicionar o item ao array de itens dentro de "pedidoGeral"
  pedidoGeral.itens.push(item);
}

// Adicionar o pedido ao array de pedidos
bodypedidoArray.push(pedidoGeral);



console.log(pedidoGeral)
console.log(bodypedidoArray)

//console.log(this.bodypedido)

this.enviarPedido(bodypedidoArray)

}

  } // Visualizar

  this.VisualizaPv = false
}


// this.bodypedido ={
//   C5_FILIAL  :                      '07',//this.datamanual[0].FILIAL,             //string
//   C5_NUM     : PEDIDO,            //string
//   C5_XCGC    : this.dynamicForm1.form.value.CNPJ,            //string
//   C5_CLIENTE : this.dynamicForm1.form.value.CLIENTE,            //string
//   C5_LOJACLI : this.dynamicForm1.form.value.LOJA,            //string
//   C5_CLIENT  : this.dynamicForm1.form.value.CLIENTE,            //string
//   C5_LOJAENT : this.dynamicForm1.form.value.LOJA,            //string
//   C5_TIPO    : this.dynamicForm1.form.value.TIPOPEDIDO,            //string
//   C5_TRANSP  :                      "000001",            //string
//   C5_TIPOCLI : this.dynamicForm1.form.value.TIPOCLI,            //string
//   C5_CONDPAG :                           obj.CONDPAG,            //string
//   C5_TABELA  :                         "",            //string
//   C5_VEND1   :                   '000001',//this.datamanual[0].VENDEDOR,            //string
//   C5_EMISSAO :                dtemissao, //this.datamanual[0].EMISSAO,            //string
//   C5_TPFRETE : this.persontransporte.TPFRETE,            //string
//   C5_FRETE   :                          0,            //numeric
//   C5_MENNOTA : this.datamanual[0].MSGNOTA,            //string
//   C5_BLQ     :                         "",//this.datamanual[0].PEDIDO,            //string
//   C5_XBOLETO :                  obj.BOLETO,            //string
//   //C5_XMSGNF  : this.datamanual[0].XMSGNF2,            //string
//   C5_XMSGNF2 : this.datamanual[0].MSGNOTA2,            //string
//   C5_XTOTAL  :                        9999,            //numeric
//   C5_XUF     :                        'SP',            //string
//   C6_ITEM    : this.datamanual[0].ITEM,            //string
//   C6_PRODUTO : this.datamanual[0].PRODUTO,            //string
//   C6_DESCRI  : this.datamanual[0].DESCRICAO,            //string
//   C6_XOBS    : this.datamanual[0].OBSERVACAO,            //string
//   C6_QTDVEN  : Number(this.datamanual[0].VENDIDO),            //numeric
//   C6_QTDENT  : Number(this.datamanual[0].ENTREGUE),            //numeric
//   C6_PRCVEN  : Number(this.datamanual[0].VALOR_UNITARIO),            //numeric
//   C6_VALOR   : Number(this.datamanual[0].VALOR_TOTAL),            //numeric
//   C6_PRUNIT  : Number(this.datamanual[0].VALOR_UNITARIO),            //numeric
//   C6_ENTREG  : dtentrega                    ,            //data 20240930
//   C6_TES     : this.datamanual[0].TES,            //string
// };



enviarPedido(bodypedido:any) {
  const url = 'http://192.168.0.240:9995/pedidos/body';

  //console.log(this.bodypedido)

  // Cabeçalhos, se necessário (ex: definir Content-Type como JSON)
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Realizando o POST
this.http.post(url, bodypedido, { headers }).subscribe(
  (response:any) => {
    console.log('Requisição bem-sucedida', response);

    if (response.Status.includes("Erro")) {

        this.poNotification.error(response.Pedido);

  } else {
    this.poNotification.success(response.Pedido + " " + response.Status);
    this.cancelarpv()
this.exibirGeral = false;
this.exibirFaturas = false;
this.exibirTransporte = false;
this.exibirImpostos = false
this.TelaexibirGeral = false
this.container = true

  }

  },
  (error:any) => {
    console.error('Erro na requisição', error);
  }
);

//this.cancelarpv()


}





convertDate(dateString: string): string {
  // Dividindo a string usando o separador '-'
  const parts = dateString.split('-');

  // Reorganizando as partes: [dia, mês, ano] para [ano, mês, dia]
  const formattedDate = `${parts[2]}${parts[1]}${parts[0]}`;

  return formattedDate;
}

Dataenviapv(dateStr: string): string {
  // Extrair partes da string de data
  const day = dateStr.slice(0, 2);    // "06"
  const month = dateStr.slice(2, 4);  // "10"
  const year = dateStr.slice(4, 8);   // "2024"

  // Retornar a data no formato YYYYMMDD
  return `${year}${month}${day}`;
}




cancelarpv() {

   this.TelaexibirGeral = false
  this.exibirGeral = false

  this.dynamicForm1.form.reset()
  this.datamanual = []
  this.person = []
  this.arrayitem = []
  this.items = []
  this.searchTerm = ''
  this.filteredItems = []
  this.itemsCpy = []
  this.container = true
  this.ngOnInit()

  this.VisualizaPv = false


  }

// Funções para alternar entre as views
mostrarGeral() {
  console.log(this.dynamicForm)

this.exibirGeral = true;
this.exibirFaturas = false;
this.exibirTransporte = false;
this.exibirImpostos = false
}

mostrarFaturas() {
  console.log(this.dynamicForm)

this.exibirGeral = false;
this.exibirFaturas = true;
this.exibirTransporte = false;
this.exibirImpostos = false
}


mostrarImpostos() {
  console.log(this.dynamicForm)

this.exibirGeral = false;
this.exibirFaturas = false;
this.exibirTransporte = false;
this.exibirImpostos = true
}


mostrarTransporte() {
this.exibirGeral = false;
this.exibirFaturas = false;
this.exibirTransporte = true;
this.exibirImpostos = false
}


onChangeFields(changeValue:any): PoDynamicFormValidation {

  if(changeValue.value.CNPJ && !changeValue.value.CLIENTE && !changeValue.value.LOJA) {
    console.log("CNPJ BUSCA NO PEDIDO")
    console.log(changeValue.value.CNPJ)
    let clipedcnpj = "cnpj="+changeValue.value.CNPJ
    console.log(clipedcnpj)
    this.clicnpjnovo = changeValue.value.CNPJ
    this.listaservico.cliped(clipedcnpj).subscribe(
      (dadoscnpj: any) => {
                dadoscnpj.items

                console.log(dadoscnpj.items[0])

        if(dadoscnpj.items.length === 0 ){

          this.AddClienteModal.open();
        }else{


        this.person = dadoscnpj.items[0]

        this.person.EMISSAO = new Date().toLocaleDateString('pt-BR');

   //    this.onLoadFields()

        }
            console.log(dadoscnpj.items.length)

            clipedcnpj = ''

      },
       (error: any) => {


      })}else{

        if(!changeValue.value.CNPJ && changeValue.value.CLIENTE && !changeValue.value.LOJA) {
          console.log("CLIENTE BUSCA NO PEDIDO")
          console.log(changeValue.value.CLIENTE)
          let clipedcnpj = "codigo="+changeValue.value.CLIENTE
          console.log(clipedcnpj)
          this.clicnpjnovo = changeValue.value.CLIENTE
          this.listaservico.cliped(clipedcnpj).subscribe(
            (dadoscnpj: any) => {
                      dadoscnpj.items

              if(dadoscnpj.items.length === 0 ){

                alert("Codigo Não Localizado")
                clipedcnpj = ''

              }else{
              this.person = dadoscnpj.items[0]
              }

                  clipedcnpj = ''

            },
            (error: any) => {
             }
          )}

      }

return {}


}





Changetransp(changeValue:any): PoDynamicFormValidation {

  console.log(changeValue.value.CNPJTRANS)

  if(changeValue.value.CNPJTRANS && !changeValue.value.NOMETRANS ) {
    console.log("trans BUSCA NO PEDIDO")
    this.listaservico.transporte(changeValue.value.CNPJTRANS).subscribe(
      (dadostrans: any) => {
                dadostrans.items

                this.transbkp =  dadostrans.items
                this.filteredtrans =  dadostrans.items

                           console.log(dadostrans.items)

      //  this.persontransporte = dadostrans.items[0]

      this.Addtransporte.open()


      },
       (error: any) => {


      })}


return {}

}


onAfterSave(row: any) {
   console.log('onAfterSave(new): ', row);
}

onBeforeRemove(row: any) {
   console.log('onBeforeRemove: ', row);

  return true;
}

onAfterRemove(row:any) {
   console.log('onAfterRemove: ', row);
}


// Inicia a linha já com as propriedades `name` e `created` preenchidas.
addItem3() {

  if(this.VisualizaPv){
    return true;

  }

  this.iVlUnitario = 0
  this.iQtd = 0
  this.iVltotal = 0
  this.iTesitem = ''
  this.prditems = ''
  this.descitems =''
  this.umitems = ''
  this.cfopitem = ''
  this.iDtentrega = ''
  this.orderDetail = ''
  if(this.datamanual.length === 0 ){this.iItem = '01'}

  this.arrayitem = []


  console.log("BUSCA PRODUTO")

  this.listaservico.prudutos(this.produto).subscribe(
    (dadosp: any) => {
      console.log(dadosp)
     console.log(dadosp.items)

     this.produtoCopy = dadosp.items
     this.produtositems = dadosp.items
     this.filteredprodutos = dadosp.items


   },
   (error: any) => {
     console.log(error)
   }
 )


 console.log(this.datamanual)
 console.log(this.datamanual.length)
 console.log(this.datamanual)

  this.userDetailModal.open();
   return true;

  }

// Inicia a linha já com as propriedades `name` e `created` preenchidas.
Alteraitem(item: { [key: string]: any }) {

  console.log(this.datamanual)
  console.log("ALTERA ITEM")
  console.log(item['CFOP'])
console.log(item)
this.iQtd = item['VENDIDO']
this.iVlUnitario = item['VALOR_UNITARIO']
this.iVltotal = item['VALOR_TOTAL']
this.prditems = item['PRODUTO']
this.descitems = item['DESCRICAO']

let entrega = item['ENTREGA']; // '2024-10-20'
let [ano, mes, dia] = entrega.split('-');
this.iDtentrega = `${dia}/${mes}/${ano}`;
//this.iDtentrega = item['ENTREGA']
this.cfopitem = item['TES']
this.iTesitem = item['TES']
this.umitems = item['UNIDADE']
this.iItem = item['ITEM']
this.orderDetail = item['OBSERVACAO'] + item['MSGNOTA'] + item['MSGNOTA2']

this.valorFormatado = this.currencyPipe.transform(this.iVltotal , 'BRL', 'symbol', '1.2-2')!;

console.log(this.cfopitem)
  //  this.pedido  = item['PEDIDO']

  this.itemModal.open();
   return true;
}

onBeforeSave(updatedRow: any, originalRow: any) {
  console.log("alterando",updatedRow,originalRow)
  // Verifica se a propriedade `name` foi alterada.
  if (updatedRow.descricao !== originalRow.descricao) {
    console.log("alteado")

  }

  if (updatedRow.descricao == originalRow.descricao) {
    console.log("valido")

  }

  updatedRow.id = 99999;

  return true;
}

salvaritens()
{
  console.log( this.person)
  console.log( [this.person].values)
  console.log(this.datamanual)
}

unitqtd(){
  console.log("quantidade")
     this.iVltotal = this.iVlUnitario * this.iQtd

     this.valorFormatado = this.currencyPipe.transform(this.iVltotal , 'BRL', 'symbol', '1.2-2')!;

     console.log(this.currencyPipe.transform(this.iVltotal, 'BRL', 'symbol', '1.2-2', 'pt-BR')!)
}

qtduni(){
  console.log("quantidade")
     this.iVltotal = this.iVlUnitario * this.iQtd

     this.valorFormatado = this.currencyPipe.transform(this.iVltotal , 'BRL', 'symbol', '1.2-2')!;


console.log(this.currencyPipe.transform(this.iVltotal, 'BRL', 'symbol', '1.2-2', 'pt-BR')!)
}

restore() {
  this.iVlUnitario = 0
  this.iQtd = 0
  this.iVltotal = 0
  this.prditems = ""
  this.descitems = ""
  this.cfopitem = ""
  this.iTesitem = ""
  this.orderDetail = ""
  this.iItem = ""
  this.umitems = ''
  this.arrayitem = []


}

AddPedidos(){

  this.TelaexibirGeral = true
  this.exibirGeral = true
  this.container = false


    return
}


buscaproduto(){

  this.listaservico.prudutos(this.searchTermp).subscribe(
    (dadosp: any) => {
      console.log(dadosp)
     console.log(dadosp.items)

     this.produtoCopy = dadosp.items
     this.produtositems = dadosp.items
     this.filteredprodutos = dadosp.items

   },
   (error: any) => {
     console.log(error)
   }
 )


}



onLoadFields(): PoDynamicFormLoad {

  const dataAtual = new Date().toLocaleDateString('pt-BR');

  return {
    value: { EMISSAO: dataAtual },
    fields: [
      { property: 'EMISSAO' }
    ],
    focus: 'EMISSAO'
  };
}

filtered(event: Array<any>) {
  console.log("ENTROu")
    this.peopleFiltered = event;
  if (event.length < 10) {
    this.filteredtrans = event
    console.log(event)
    console.log("DENTRO")
    this.peopleFiltered = [];
  } else {
            if(!this.filteredtrans){
            this.filteredtrans = this.transbkp
            }
    try {
      console.log("TRAY")
    } catch (error) {
      return undefined;
    }
  }
}


transselect(row: any) {
console.log(row)
 this.persontransporte = {
CODTRANS: row.CODTRANS,
NOMETRANS: row.NOMETRANS,
CNPJTRANS: row.CNPJTRANS,
CONTATOTRA: row.CONTATOTRA,
TELTRANS: row.TELTRANS,
TPFRETE: row.TPFRETE
    };

}

eventocfop(){

  console.log(this.cfopitem)
  console.log(this.iTesitem)

  this.cfopitem = this.iTesitem
}


convertData(data: string): string {
  // Extrair o dia, o mês e o ano da string
  const dia = data.substring(0, 2);
  const mes = data.substring(2, 4);
  const ano = data.substring(4, 8);

  // Retornar a data formatada
  return `${ano}-${mes}-${dia}`;
}


}

function getDate(hoje:any) {
     hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
    const ano = hoje.getFullYear().toString();
    return `${dia}-${mes}-${ano}`;
}

