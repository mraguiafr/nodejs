import { Component, input, Input, ViewChild } from '@angular/core';
import { PoCheckboxGroupOption, PoDialogService, PoDynamicFormComponent, PoDynamicFormField, PoDynamicViewField, PoModalAction, PoModalComponent, PoNotificationService, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { ListaService } from '../cliente/lista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-areceber',
  templateUrl: './areceber.component.html',
  styleUrl: './areceber.component.css',
})
export class AreceberComponent {
  currentFriend: object | undefined;

  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  receivedData: any
  receivedData1: string | undefined;

  @Input()  childInput: string | undefined;

  @Input() urlid: any = '';
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent | undefined;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent | undefined;
  @ViewChild(PoModalComponent, { static: true })  poModal!: PoModalComponent;

  actions: Array<PoTableAction> = [
     { action: this.remove.bind(this), icon: 'ph ph-currency-circle-dollar', label: 'Enviar Boleto' },
     { action: this.detalhes.bind(this), icon: 'ph ph-currency-circle-dollar', label: 'Detalhes' },
     { action: this.remove.bind(this), icon: 'ph ph-currency-circle-dollar', label: 'Baixar' }
  ];

  dados: Array<any> = []
  filialini:any ='01'
  filialfim:any ='99'
  lojaini:any ='0001'
  lojafim:any ='9999'
  clienteini:any ='000001'
  clientefim:any ='999999'
  cnpjini:any ='00000000000000'
  cnpjfim:any ='99999999999999'
  tituloini:any ='000000001'
  titulofim:any ='999999999'
  base:any = '99'
  public visibleArray: any[] = [];

  stringValida:any
  items: Array<any> = []
  items1: Array<any> = []
  valorDeX: string | null = null;


  readonly detailFields: Array<PoDynamicViewField> = [
    { property: 'Nome', label: 'Nome' , gridLgColumns: 4, divider: 'Geral' },
    { property: 'Nome2', label: 'Fantasia', gridLgColumns: 4 },
    { property: 'Cnpj', label: 'Cnpj', gridLgColumns: 4 },
    { property: 'Tipo', label: 'Tipo de Pessoa', gridLgColumns: 4 },
    { property: 'Abertura', label: 'Abertura', gridLgColumns: 4 },
    { property: 'Pessoa', label: 'Tipo de Cliente', gridLgColumns: 4 },
    { property: 'Inscricao', label: 'Inscrição Estadual', gridLgColumns: 4 },
    { property: 'Simples', label: 'Simples Nacional', gridLgColumns: 4 },

    { property: 'Loja', label: 'Loja', divider: 'Endereço' },
    { property: 'Endereco', label: 'Rua' },
    { property: 'Bairro', label: 'Bairro' },
    { property: 'Cep', label: 'CEP' },
    { property: 'Municipio', label: 'Cidade' },

    { property: 'Email', label: 'email', gridLgColumns: 6, divider: 'Contatos' },
    { property: 'ddd', label: 'ddd' },
    { property: 'Telefone', label: 'Telefone' },

    { property: 'Analise', label: 'Analise',divider: 'Vendas/Analise'  },
    { property: 'primeiropv', label: 'Primeira Compra'},
    { property: 'ultimopv', label: 'Ultima Compra' },
    { property: 'saldopv',            label: 'Saldo Em Pedido' ,type: 'currency', format: 'R$'},
    { property: 'mcompra',         label: 'Maior Compra',type: 'currency', format: 'R$' },
    { property: 'limitec', label: 'Limite de Credito',type: 'currency', format: 'R$' },
    { property: 'creditol', label: 'Credito Liberado Até' },
    { property: 'Obs', label: 'Analise do Cliente' },



  ];

  columns: Array<PoTableColumn> = [
    {
      property: 'STATUS',
      type: 'subtitle',
      width: '180px',
      subtitles: [
        { value: 'V', color: 'color-07', label: 'Duplicatas Atrasadas', content: 'DPA'},
        { value: 'A' , color: 'color-10', label: 'Titulo Avencer', content: 'DPD'},
        { value: 'B' , color: 'color-03', label: 'Titulo Pago', content: 'TP'},
        { value: 'P' , color: 'color-01', label: 'Pago Parcial', content: 'PP'},
      ]},
//{ property: 'PREFIXO', label: 'PREFIXO' ,width: '50px'},
{ property: 'NUMERO', label: 'Numero'},
{ property: 'PARCELA', label: 'Parcela'},
//{ property: 'TIPO', label: 'TIPO' ,width: '50px'},
//{ property: 'COD_CLIENTE', label: 'COD.CLIENTE' ,width: '30px'},
//{ property: 'LOJA', label: 'LOJA' ,width: '20px'},
//{property: 'CLIENTE', label: 'CLIENTE',width: '50px' },
{ property: 'EMISSAO', label: 'EMISSAO', type: 'date'},
{ property: 'VENCIMENTO', label: 'VENCIMENTO', type: 'date'},
{ property: 'VALOR_TOTAL', label: 'Valor Total',type: 'currency', format: 'R$'},
//{ property: 'VALOR_PENDENTE', type: 'currency', format: 'R$', width: '25px' },
{ property: 'VENDEDOR', label: 'VENDEDOR'},
{ property: 'PEDIDOS', label: 'PEDIDO'},
//{ property: 'CNPJ',label : 'CNPJ', width: '50px' },
// { property: 'ENDERECO',label : 'ENDEREÇO', width: '50px' },
// { property: 'CEP', label: 'CEP', width: '50px' },
// { property: 'DDD', label: 'DDD', width: '50px' },
// { property: 'TELEFONE', label: 'TELEFONE', width: '50px' },
// { property: 'CIDADE', label: 'CIDADE', width: '50px' },
// { property: 'EMAIL', label: 'EMAIL', width: '50px' },
 { property: 'FILIAL', label: 'FILIAL' },
 { property: 'HISTORICO', label: 'HISTORICO'}

];
total: number = 0;
totalall: number = 0;
totalExpanded = 0;

EMISSAOx:any
ENTREGAx:any



////////////////////////////////////////////////////////////////////////////////////////////////

person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    { property: 'cnpj',  placeholder: 'Filial Da Empresa' , order: 1,label: 'FILIAL', gridColumns: 2, gridSmColumns: 12, visible: true },
    //{ property: 'cnpj',  placeholder: 'Cnpj Da Empresa' , divider: 'PERSONAL DATA', order: 1,label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 4, gridSmColumns: 12, visible: true },

  ];
  message: any;

  searchctr!: any;
nomecliente: any;
  Codigo: any;
  Loja: any;
  Filial: any;
  areceberok!: { base:any; filialini: any; filialfim: any; lojaini: any; lojafim: any; clienteini: any; clientefim: any; cnpjini: string | undefined; cnpjfim: string | undefined; tituloini: string | undefined; titulofim: string | undefined; };

  constructor(
    private listaservico: ListaService,
    public poNotification: PoNotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
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
    this.poNotification.information('Em Desenvolvimento')
  }



  detalhes(item: { [key: string]: any }) {

    this.poModal.open()
  }

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' }
  ];



  buscaareceber(){
  console.log(this.searchctr)

      if (this.searchctr ) {
if(this.searchctr.length === 14 ) {
  console.log('14')
this.cnpjini = this.searchctr
this.cnpjfim = this.searchctr}
this.lojaini = '0000'
    this.lojafim ='9999'
    this.filialini = '01'
this.filialfim = '99'
this.clienteini = '000001'
this.clientefim = '999999'

if(this.searchctr.length === 9 ) {
  console.log('9')
 
  this.tituloini = this.searchctr
  this.titulofim = this.searchctr
   this.lojaini = '0000'
    this.lojafim ='9999'
    this.filialini = '01'
this.filialfim = '99'
this.clienteini = '000001'
this.clientefim = '999999'
    
}

  if(this.searchctr.length === 6 ) {
    console.log('6')
    this.clienteini = this.searchctr
    this.clientefim = this.searchctr
    this.lojaini = '0001'
    this.lojafim ='9999'
    this.filialini = '01'
    this.filialfim = '99'
  } 
           this.areceberok  = {
          base:      this.base,
          filialini: this.filialini,
          filialfim: this.filialfim,
          lojaini:   this.lojaini,
          lojafim:   this.lojafim,
          clienteini:this.clienteini,
          clientefim:this.clientefim,
          tituloini: this.tituloini,
          titulofim: this.titulofim,
          cnpjini:   this.cnpjini,
          cnpjfim:   this.cnpjfim
          }
          console.log(this.areceberok)

              this.listaservico.areceber(this.areceberok).subscribe(
                (dados: any) => {
                  this.items = dados.items
                  console.log(this.items)
                  this.nomecliente = this.items[1].CLIENTE
                          for (let i = 0; i < this.items.length; i++) {

                           if( !dados.items[i].VENCIDO ){
                             this.items[i].STATUS = 'V'
                            }
                           }


                },
                (error: any) => {


                }
              )

        console.log("TEM DADOS")
     }else{

      this.areceberok  = {
        base:      '99',
        filialini: '01',
        filialfim: '99',
        lojaini:   '0000',
        lojafim:   '9999',
        clienteini:'000000',
        clientefim:'999999',
        tituloini:'000000000',
        titulofim:'999999999',
        cnpjini:   '00000000000000',
        cnpjfim:   '99999999999999'
        }

        this.receivedData = ''
        this.receivedData1 = ''
        this.nomecliente   = ''


      this.listaservico.areceber(this.areceberok).subscribe(
        (dados: any) => {
          this.items = dados.items
        //  this.nomecliente = this.items[1].CLIENTE
                  for (let i = 0; i < this.items.length; i++) {

                   if( !dados.items[i].VENCIDO ){
                     this.items[i].STATUS = 'V'
                    }
                   }


        },
        (error: any) => {


        }
      )

      console.log("NAO TEM DADOS")


     }


     }

     close: PoModalAction = {
      action: () => {
        this.closeModal();
      },
      label: 'Sair',
      danger: true
      };

      closeModal() {
        this.poModal.close();
         }

         Atualizatabela(){
          this.ngOnInit()

         }

  ngOnInit(): void {

    const currentUser = this.authService.getCurrentUser();

    // Verifica se currentUser não é null
    if (currentUser !== null) {
      const allowedUsers = ['000024', '000032', '000033', '000034' ,'000035'];

      if (!allowedUsers.includes(currentUser)) {
        alert('Acesso negado. Redirecionando para a página de acesso negado.');
        this.router.navigate(['/acesso-negado']); // Redireciona para a página de acesso negado se o usuário não estiver permitido
      }
    } else {
      alert('Usuário não autenticado. Redirecionando para a página de login.');
      this.router.navigate(['/login']); // Redireciona para o login se currentUser for null
    }


    this.receivedData = ''
    this.receivedData1 = ''

    const navigation = this.router.getCurrentNavigation();
   // this.receivedData = navigation?.extras?.state?.['data'] || 'Nenhum dado recebido'
    this.receivedData1 = history.state.data ;
    this.clienteini  = history.state.codigo ;
    this.lojaini    = history.state.loja ;
    this.filialini  = history.state.filial ;
    this.base  = history.state.base ;

    if (this.filialini){
      this.filialini = '01'
      this.filialfim = '99'
    }else{

    }

      console.log(this.receivedData1,this.lojaini,this.clienteini)
      if (this.receivedData1) {

    this.areceberok  = {
    base:      this.base,
    filialini: this.filialini,
    filialfim: this.filialfim,
    lojaini:   this.lojaini,
    lojafim:   this.lojaini,
    clienteini:this.clienteini,
    clientefim:this.clienteini,
    tituloini:this.tituloini,
    titulofim:this.titulofim,
    cnpjini:   this.receivedData1,
    cnpjfim:   this.receivedData1
    }

        this.listaservico.areceber(this.areceberok).subscribe(
          (dados: any) => {
            this.items = dados.items
            this.nomecliente = this.items[1].CLIENTE
                    for (let i = 0; i < this.items.length; i++) {

                     if( !dados.items[i].VENCIDO ){
                       this.items[i].STATUS = 'V'
                      }
                     }


          },
          (error: any) => {


          }
        )

        console.log("nao a dados")
      }else{

        console.log("consulta inicial")

        this.areceberok  = {
          base:      '',
          filialini: '01',
          filialfim: 'ZZ',
          lojaini:   '0000',
          lojafim:   '9999',
          clienteini: '000000',
          clientefim: '999999',
          tituloini: '000000000',
          titulofim: '999999999',
          cnpjini:   '00000000000000',
          cnpjfim:   '99999999999999'
          }

  console.log(this.areceberok)


        this.listaservico.areceber(this.areceberok).subscribe(
          (dados: any) => {
            this.items = dados.items
            console.log(this.items)
            console.log(dados.items)
                    for (let i = 0; i < this.items.length; i++) {

                     if( !dados.items[i].VENCIDO ){
                       this.items[i].STATUS = 'V'
                      }
                     }


          },
          (error: any) => {


          }
        )
      }


  }



}
