import { Component, EventEmitter, Output, ViewChild,output } from '@angular/core';
import { ListaService } from './lista.service';
import { PoComboOption, PoDynamicFormComponent, PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoDynamicViewField, PoModalAction, PoModalComponent, PoNotificationService, PoRadioGroupOption, PoSearchFilterMode, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { ApiserviceService } from './apiservice.service';
import { ClienteService } from './cliente.service';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  template: `
    <div>
      <h1>Componente Pai</h1>
      <app-child [childInput]="parentVariable"></app-child>
    </div>
  `

})
export class ClienteComponent {

   // Propriedades para armazenar os dados
   updated!: string;
   taxId!: string;
   alias!: string;
   founded!: string;
   head!: boolean;
   statusDate!: string;
   status: any;
   address: any;
   phones!: any[];
   emails!: any[];
   mainActivity: any;
   sideActivities!: any[];
   registrations!: any[];


   eventcnpj = ''
   eventestado = ''

   // Company properties
   companyId!: number;
   companyName!: string;
   companyEquity!: number;
   companyNature: any;
   companySize: any;
   members!: any[];

  private messageSource = new BehaviorSubject<string>('Valor inicial');
  currentMessage = this.messageSource.asObservable();

  @Output() CnpjCliente = new EventEmitter<string>();

  parentVariable: string = 'Valor vindo do Pai';

  @ViewChild('userDetailModal') userDetailModal!: PoModalComponent;
  @ViewChild('AddClienteModal') AddClienteModal!: PoModalComponent;
  @ViewChild(PoModalComponent, { static: true })  poModal!: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true })  poTable!: PoTableComponent;

  valorDeX: string = 'algumValor';


  dados:any
  CnpjDetalhes:any
  items: Array<any> = []
  itemsCpy: Array<any> = []
  person = {};
  personcep = []
  searchTerm = ''
Analisec: any;
isLoggedIn: boolean = false
isdetal: boolean = false
modalTerm: boolean = true
content: any

data: any
Codigo: any
Loja: any
Filial:any

detailedHotel: any;


alteradados: any
alteradadoscep: any
personcepcpy: any

container = true

topedidos = false;
tosalvar = false
tonotas = false
totitulos = false
codarray = true

exibirVendas = false;
exibirAnalise = false;
exibirHistoria = false
exibirGeral = false;
exibirEnderecos = false;
exibirCadastros = true;
exibiralteracoes = false;
exibebtnrodape = false
containerGeralA = true
containerGeralB = false


exibearray = false
fieldsbkp: any



@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent | undefined;



personalterar = {};
cliente = new Cliente();
validateFieldsgeral: Array<string> = ['cnpj'];
validateFieldsend: Array<string> = ['cep'];
validateFieldsana: Array<string> = [''];
validateFieldsven: Array<string> = [''];
validateFieldshis: Array<string> = [''];


  actions: Array<PoTableAction> = [
    { action: this.alterar.bind(this), icon: 'po-icon ph ph-trash', label: 'Alterar' },
    { action: this.remove.bind(this), icon: 'po-icon ph ph-trash', label: 'Financeiro' },
    { action: this.OpenModalDetalhes.bind(this), icon: 'ph ph-info', label: 'Resumido' }

  ];


   columns: Array<PoTableColumn> = [
    {
      property: 'Financeiro',
      type: 'subtitle',
      subtitles: [
        { value: 7 , color: 'color-07', label: 'Duplicatas Atrasadas', content: 'DPA'},
        { value: 10 , color: 'color-10', label: 'Duplicatas Em Dia', content: 'DPD'},
      ]
    },
    { property: 'Base', label: 'Empresa' },
    { property: 'Nome', label: 'Razão Social' },
    { property: 'Cnpj', label: 'CNPJ/CPF'},
     { property: 'Email', label: 'Email'},
     { property: 'Codigo', label: 'Códico'},
     { property: 'Loja',label : 'Loja'},
     { property: 'Filial', label: 'Filial'},
     { property: 'Nome2', label: 'Nome Fantasia'},
  ];


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
  Base: any;
  cnpjja: any;

  constructor(
    private listaservico: ListaService,
    private service: ApiserviceService,
    private clienteService:ClienteService,
    private router: Router,
    public poNotification: PoNotificationService,
  ) {}



  filteredItems = [...this.items]; // Inicialmente, todos os itens estão visíveis


  ngOnInit(): void {
      if (this.itemsCpy.length === 0){
       // console.log("origem")
        //console.log(this.searchTerm)
        //console.log(this.filteredItems)
         this.listaservico.listacliente(this.searchTerm).subscribe(
           (dados: any) => {
             this.items = dados.items
             this.itemsCpy = dados.items
              console.log(this.items)
              //  console.log(this.itemsCpy)
                this.filteredItems = this.items

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

              this.exibirVendas = false;
              this.exibirAnalise = false;
              this.exibirHistoria = false
              this.exibirGeral = false;
              this.exibirEnderecos = false;
              this.exibirCadastros = true;
              this.exibiralteracoes = false;
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
        item.Nome.toLowerCase().includes(searchLower) ||
        item.Email.toLowerCase().includes(searchLower) ||
        item.Cnpj.toLowerCase().includes(searchLower)
      );
    }
  }

  onClick() {
    alert('Po Button!');
  }


  Eventodatelhes(item: { [key: string]: any; }) {
    console.log(item['Nome'])
    console.log(item)


          if(item['Financeiro'] === 10){
            this.Analisec = 'Em Dia'
          }else
          {

            this.Analisec = 'Duplicadas Atrasadas'
          }

                //   console.log(dados.items)


this.person = {
Abertura : item['Abertura'],
Financeiro : this.Analisec,
Bairro : item['Bairro'],
Cep : item['Cep'],
Cnpj : item['Cnpj'],
Codigo : item['Codigo'],
Email : item['Email'],
Endereco : item['Endereco'],
Estado : item['Estado'],
Filial : item['Filial'],
Habilitado : item['Habilitado'],
Inscricao : item['Inscricao'],
Loja : item['Loja'],
Municipio : item['Municipio'],
Nome : item['Nome'],
Nome2 : item['Nome2'],
Pessoa : item['Pessoa'],
Simples : item['Simples'],
Telefone : item['Telefone'],
Tipo : item['Tipo'],
creditol : item['creditol'],
ddd : item['ddd'],
limitec : item['limitec'],
mcompra : item['mcompra'],
primeiropv : item['primeiropv'],
saldopv : item['saldopv'],
ultimopv : item['ultimopv'],
Obs : item['Obs']
}
    this.isdetal = true
    this.poModal.open()
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
     closeModal() {
     this.poModal.close();
      }

      confirm1: PoModalAction = {
        action: () => {

          console.log("Confirma1")
          console.log(this.eventestado)
          console.log(this.eventcnpj)

          if(this.eventcnpj === 'CNPJ'){

          const bodycnpj = {
            Cnpj: this.searchTerm,
            Estado: this.eventestado
           }
          
          if(this.searchTerm.length > 13){
            this.service.postCliente(bodycnpj).subscribe(
              (dados: any) => {
               console.log(dados)
               console.log(dados.Cadastro)
    
            this.poNotification.success('Cadastro Criado ou Atualizado')
            this.filterItems()
             this.ngOnInit()
             this.userDetailModal.close()
  
              })
  
            }else{
  
            this.poNotification.warning('Não Há Dados')
            }
  

        }},
        label: 'Confirmar'
      };

      close1: PoModalAction = {
        action: () => {
         this.userDetailModal.close();
         this.ngOnInit()
        },
        label: 'Sair',
        danger: true
        };

      confirm2: PoModalAction = {
        action: () => {

          console.log('conforma cnpj')
          console.log(this.searchTerm)
          this.searchTerm = this.content
          if(this.searchTerm.length > 13){
          this.service.postCliente(this.searchTerm).subscribe(
            (dados: any) => {
             console.log(dados)
             console.log(dados.Cadastro)


          this.poNotification.success('Cadastro Criado ou Atualizado')
          this.filterItems()
           this.ngOnInit()
           this.userDetailModal.close()

            })

          }else{

          this.poNotification.warning('Não Há Dados')
          }


        },
        label: 'Confirmar'
      };



      close2: PoModalAction = {
       action: () => {
        this.AddClienteModal.close()
        this.ngOnInit()
       },
       label: 'Sair',
       danger: true
       };

      OpenModalDetalhes(item: { [key: string]: any }) {
      //  console.log(Object.values(item))
       // console.log(Object.values(item)[13])
        this.Eventodatelhes(item)
        this.poModal.open()
      }

      remove(item: { [key: string]: any }) {

        this.content = item['Cnpj']
        this.Codigo  = item['Codigo']
        this.Loja    = item['Loja']
        this.Filial  = item['Filial']
        this.Base  = item['base']

        this.router.navigate(['/areceber'], { state: { data: this.content,codigo: this.Codigo,loja: this.Loja,filial: this.Filial } });

      }

alterar(item: { [key: string]: any }) {
        this.content = item['Cnpj']
        this.Codigo  = item['Codigo']
        this.Loja    = item['Loja']
        this.Filial  = item['Filial']
        this.Base  = item['base']
//console.log(this.content)

if (this.Filial.trim() === "") {
this.alterarcadastro(this.content)

this.exibirVendas = false;
this.exibirAnalise = false;
this.exibirHistoria = false
this.exibirGeral = true;
this.exibirEnderecos = false;
this.exibirCadastros = false;
this.exibiralteracoes = true;
this.container = false
this.containerGeralA = false
this.containerGeralB = true
}else{
this.poNotification.warning('Filial Não Permite Alterar')
}


      }

      changeMessage(message: string) {
        this.messageSource.next(message);
      }

      sumTotal(row: any) {
        if (row.Cnpj) {
         console.log(row.Cnpj)

        }
      }

      toggleEvent() {

        this.isLoggedIn = true; // Alterna o valor entre true e false
      }

      navigateToChild() {
        const dataToPass = 'Valor do Pai';

        // Navegar para a rota do filho e passar dados através do estado
        this.router.navigate(['/areceber'], { state: { data: dataToPass } });
      }



 /////////////////ALTERA CADASTRO//////////////////////////////////////////////



  salvar() {

    this.atualizarDadosCliente()

   this.person = []
   this.personcep = []
   this.alteradadoscep = []
   this.personcepcpy = []

   this.exibirCadastros = true
    this.exibirVendas = false;
      this.exibirEnderecos = false;
      this.exibirAnalise = false;
      this.exibirHistoria = false
      this.exibirGeral = false
      this.exibiralteracoes = false
      this.exibebtnrodape = false
      this.containerGeralA = true
      this.containerGeralB = false
      this.alteradados = []




    }

    voltarcadastro() {

    
   this.person = []
   this.personcep = []
   this.alteradadoscep = []
   this.personcepcpy = []

   this.exibirCadastros = true
    this.exibirVendas = false;
      this.exibirEnderecos = false;
      this.exibirAnalise = false;
      this.exibirHistoria = false
      this.exibirGeral = false
      this.exibiralteracoes = false
      this.exibebtnrodape = false
      this.containerGeralA = true
      this.containerGeralB = false
      this.alteradados = []



      }





    fieldsGeral: Array<PoDynamicFormField> = [
      {
        property: 'Codigo',
        gridColumns: 3,
      gridSmColumns: 6,
        label: 'Código',
        disabled: true,
        visible: this.codarray
      },

      {
        disabled: true,
        property: 'Nome',
        gridColumns: 3,
      gridSmColumns: 6,
        label:'Razão Social',
        placeholder: 'Nome Da Empresa'
      },
      { property: 'Cnpj', disabled: true,  placeholder: 'Cnpj Da Empresa' ,label: 'Cnpj',
        gridColumns: 3,
        gridSmColumns: 6,
        visible: true },
        {
          property: 'Pessoa',
          gridColumns: 6,
          gridSmColumns: 12,
          disabled: true,
          label: 'Tipo Pessoa',
          options:  [
            { code: 'Fisica', state: 'Pessoa Fisica' },
            { code: 'Juridica', state: 'Pessoa Juridica' },
            { code: '240', state: 'Outros' },
            { code: '120', state: 'Outros 2' }
          ],
          optionsMulti: false,
           fieldLabel: 'state',
          fieldValue: 'code'

        },
      {
        property: 'Contatos',
        gridColumns: 3,
        gridSmColumns: 6,
        placeholder: 'Listar Contatos'
      },
      {
      property: 'Nome2',
      disabled: false,
      label: 'Nome Fantasia',
      gridColumns: 3,
      gridSmColumns: 6,
      placeholder: 'Nome Fantasia'
    },
        {
      property: 'Inscricao',
      gridColumns: 3,
      gridSmColumns: 6,
      disabled: true,
      placeholder: 'Inscricao Estadual'
    },

     {
       property: 'Abertura',
       label: 'Data Fundação',
       gridColumns: 3,
       gridSmColumns: 6,
       disabled: true,
     },
     {
      property: 'Cnae',
      gridColumns: 3,
      gridSmColumns: 6,
      disabled: true,
      placeholder: 'Cnae'
    },
    {
      property: 'Habilitado',
      gridColumns: 3,
      gridSmColumns: 6,
      placeholder: 'Status',
      disabled: true,
      options:  [
        { code: '2', state: 'Sim' },
        { code: '1', state: 'Não' },
        { code: '240', state: 'Outros' },
        { code: '120', state: 'Outros 2' }
      ],
      optionsMulti: false,
       fieldLabel: 'state',
      fieldValue: 'code'
    },

  ];


  fieldsEndereco: Array<PoDynamicFormField> = [

   {
     property: 'logradouro',
     gridColumns: 6,
     gridSmColumns: 12,
     placeholder: 'Endereço'
   },
   {
     property: 'bairro',
     gridColumns: 6,
      gridSmColumns: 12,
     placeholder: 'Bairro'
   },
     {
     property: 'estado',
     gridColumns: 3,
      gridSmColumns: 6,
     placeholder: 'Estado'
   },
   {
     property: 'regiao',
     required: true,
     gridColumns: 3,
      gridSmColumns: 6,
     placeholder: 'Codigo Municipio'
   },
   {
     property: 'cep',
     gridColumns: 3,
      gridSmColumns: 6,
     placeholder: 'Cep'
   },
   {
     property: 'localidade',
     required: true,
     gridColumns: 3,
      gridSmColumns: 6,
     placeholder: 'Nome Municipio'
   },
   {
    property: 'tipoend',
    gridColumns: 3,
    gridSmColumns: 6,
    label: 'Tipo Endereço',
    optional: true,
    fieldValue: 'code',
    fieldLabel: 'console',
    options: [
      { console: 'Endereco Cnpj', code: 'NWU' },
      { console: 'Endereço Entrega', code: 'PS4' },
      { console: 'Endereco Cobrança', code: 'XONE' },
      { console: 'Outros', code: 'XSSX' }
    ],
    optionsMulti: false
  },
 ];



 FieldsVendas: Array<PoDynamicFormField> = [
    {
    property: 'CodTrans',
    label: 'Codigo',
    gridColumns: 6,
      gridSmColumns: 12,
  },
  {
    property: 'Transporte',
    label: 'Nome',
    gridColumns: 6,
      gridSmColumns: 12,
  },
  {
    property: 'Condpag',
    label: 'Condição de Pagamento',
    gridColumns: 6,
      gridSmColumns: 12,
  },
  {
   property: 'FormaPag',
   label: 'Forma de Pagamento',
   gridColumns: 6,
   gridSmColumns: 12,
 },
 {
   property: 'Tabela',
   label: 'Tabela de Preço',
   gridColumns: 6,
      gridSmColumns: 12,
 },
   ];



  FieldsAnalise: Array<PoDynamicFormField> = [
   {
     property: 'Abertura',
     label: 'Aberta Desde',
     gridColumns: 3,
      gridSmColumns: 6,
      disabled: true,
   },
   {
     property: 'limitec',
     label: 'Limete Credito',
     type: 'number',
     gridColumns: 3,
      gridSmColumns: 6,
    },
   {
    property: 'creditol',
    label: 'Validade do Credito',
    gridColumns: 3,
    gridSmColumns: 6,
    type: 'date',
    format: 'dd/mm/yyyy',
  },
  {
    property: 'Datacadastro',
    label: 'Data do Cadastro',
    gridColumns: 3,
    gridSmColumns: 6,
    disabled: true,
  },
  {
    property: 'Risco',
    label: 'Risco',
    gridColumns: 3,
      gridSmColumns: 6,
      options:  [
        { code: 'A', state: 'A' },
        { code: 'B', state: 'B' },
        { code: 'C', state: 'C' },
        { code: 'D', state: 'D' }
      ],
      optionsMulti: false,
       fieldLabel: 'state',
      fieldValue: 'code'
  },
   {
    property: 'Contato',
    label: 'Contato Financeiro',
    gridColumns: 3,
      gridSmColumns: 6,
  },
  {
    property: 'Telcompras',
    label: 'Telefone Financeiro',
    gridColumns: 3,
    mask: '(999) 99999-9999',
      gridSmColumns: 6,
  },
  {
    property: 'Email',
    label: 'Email Financeiro',
    gridColumns: 3,
    icon: 'ph ph-envelope' ,
      gridSmColumns: 6,
  },

  {
    property: 'Obs',
    label: 'Observação',
    gridColumns: 12,
    gridSmColumns: 12,
    rows: 3,
  },

    ];



    FieldsHistoria: Array<PoDynamicFormField> = [
    {
      property: 'mcompras',
      label: 'Maior Compras',
      type: 'number',
      gridColumns: 3,
      gridSmColumns: 6,
    },
    {
      property: 'Notas',
      label: 'Notas Emitidas',
      gridColumns: 3,
      gridSmColumns: 6,
    },
    {
     property: 'Saldupl',
     label: 'Valor A Pagar',
     type: 'number',
     gridColumns: 3,
      gridSmColumns: 6,
   },
   {
     property: 'Titulos',
     label: 'Titulos em Aberto',
     type: 'number',
     gridColumns: 3,
      gridSmColumns: 6,
   },
   {
    property: 'PagTra',
    label: 'Em Atraso',
    type: 'number',
    gridColumns: 3,
      gridSmColumns: 6,
  },
     ];


  mostrarFaturas() {
    this.exibirGeral = false;
  }


  isPaymentEnable() {
    console.log(this.dynamicForm?.value.codigo)
    return (
      (this.dynamicForm?.value.codigo != undefined)
    );
  }





mostrarGeral() {
  this.exibirVendas = false;
  this.exibirEnderecos = false;
  this.exibirAnalise = false;
  this.exibirHistoria = false
  this.exibirGeral = true
  this.exibebtnrodape = true
}

mostrarEnderecos() {
  this.exibirVendas = false;
  this.exibirEnderecos = true;
  this.exibirAnalise = false;
  this.exibirHistoria = false
  this.exibirGeral = false
}


mostrarVendas() {
  this.exibirVendas = true;
  this.exibirEnderecos = false;
  this.exibirAnalise = false;
  this.exibirHistoria = false
  this.exibirGeral = false


}


mostrarHistoria() {
  this.exibirVendas = false;
  this.exibirEnderecos =false;
  this.exibirAnalise = false;
  this.exibirHistoria = true
  this.exibirGeral = false

}


mostrarAnalise() {
  this.exibirVendas = false;
  this.exibirEnderecos = false;
  this.exibirAnalise = true;
  this.exibirHistoria = false
  this.exibirGeral = false
}




  mostrarSintegra(){

    this.alteradados = this.person

    this.service.getcnpjja(this.content).subscribe(
      (dados: any) => {
       console.log(dados.items)

       console.log(dados.items['alias'])

       this.createVariables(dados.items);


      })


  return {

  }

  }


  createVariables(data: any) {
    // Propriedades de nível superior
    this.updated = data.updated;
    this.taxId = data.taxId;
    this.alias = data.alias;
    this.founded = data.founded;
    this.head = data.head;
    this.statusDate = data.statusDate;
    this.status = data.status;
    this.address = data.address;
    this.phones = data.phones;
    this.emails = data.emails;
    this.mainActivity = data.mainActivity.id;
    this.sideActivities = data.sideActivities;
    this.registrations = data.registrations;

    // Propriedades da empresa
    const { company } = data;
    this.companyId = company.id;
    this.companyName = company.name;
    this.companyEquity = company.equity;
    this.companyNature = company.nature;
    this.companySize = company.size;
    this.members = company.members;

    // Se precisar acessar os membros, você pode fazer isso aqui
    this.members.forEach((member: any, index: number) => {
      const { since, role, person } = member;
      console.log(`Member ${index + 1}:`, person.name);
      // Você pode armazenar informações específicas se desejar
    });


    this.alteradados.Nome = this.companyName
    this.alteradados.Nome2 = this.alias
    this.alteradados.Cnae = this.mainActivity





  }


alterarcadastro(content: any){

  console.log(content)
  this.cnpjja = content
if(content) {
  //  alert(changeValue.value.cnpj)
// this.clienteService.buscar(changeValue.value.cnpj)
//  .subscribe(this.readData)
//  console.log(this.readData)

//  this.clienteService.buscar(changeValue.value.cnpj).subscribe((res) => {
this.service.getCliente(content).subscribe((res) => {

this.person = res.items[0]
const updatedData = this.updateCreditoData(this.person);

this.person = updatedData
this.personcep = updatedData
this.exibebtnrodape = true
console.log(this.person)
});

}


return {

}

}


formatDateToValid(dateStr: string | null): string | null {
  if (!dateStr || dateStr.trim() === '') {
    return null;
  } else {
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
}

updateCreditoData(data: any): any {
  if (data.creditol) {
    data.creditol = this.formatDateToValid(data.creditol);
  }
  return data;
}


Changecep(changeValue:any): PoDynamicFormValidation {
  console.log(changeValue.Cep)
    this.alteradadoscep = changeValue.value
    console.log(this.alteradadoscep)
    // Verificando se "cep" está contido no objeto
if ('cep' in this.alteradadoscep) {
  console.log("A propriedade 'cep' está contida no objeto.");
  console.log("Valor do CEP:", this.alteradadoscep.cep);
  this.listaservico.cepcerto(this.alteradadoscep.cep).subscribe((res) => {
    this.personcep = res
    this.personcepcpy = this.personcep

     console.log(res)
     });


} else {
  console.log("A propriedade 'cep' não está contida no objeto.");
}


    return {
      //value: { Nome2: 'TESTE' },
      // fields: [
      //   {
      //     property: 'Nome2',
      //     gridColumns: 6,
      //     disabled: false
      //   }
      // ]
    };
  }
  
  // changeEventenpj(event: string) {
  //   this.eventcnpj = event;
  //   console.log(this.eventcnpj)
  // }

  // changeEventestado(event: string) {
  //   this.eventestado = event;
  //   console.log(this.eventestado)
  // }

  public readonly estadosOptions: Array<PoComboOption> = [

  { value: 'SP' },  { value: 'RJ' }, { value: 'MG' },{ value: 'AC' },{ value: 'AL' }, 
  { value: 'AM' },   { value: 'AP' },   { value: 'BA' },   { value: 'CE' },   { value: 'DF' }, 
  { value: 'ES' },   { value: 'GO' },   { value: 'MA' },   { value: 'MS' }, 
  { value: 'MT' },   { value: 'PA' },   { value: 'PB' },   { value: 'PE' }, 
  { value: 'PI' },   { value: 'PR' },   { value: 'RN' },   { value: 'RO' },   
  { value: 'RR' },   { value: 'RS' },   { value: 'SC' },   { value: 'SE' },   { value: 'TO'  }    
    ];
    

onChangeFields(changeValue:any): PoDynamicFormValidation {
//console.log(changeValue.value)

  return {
    //value: { Nome2: 'TESTE' },
    // fields: [
    //   {
    //     property: 'Nome2',
    //     gridColumns: 6,
    //     disabled: false
    //   }
    // ]
  };
}

atualizarDadosCliente() {
  console.log("ATUALIZA DADOS")
  // console.log(this.person)
  // console.log(this.personcep)
  // console.log(this.alteradados)
  // console.log(this.alteradadoscep)
   console.log(this.personcepcpy)

  this.alteradados = this.person

  console.log(this.alteradados)
  
console.log('passou 1 ')

if (!this.personcepcpy || this.personcepcpy.length === 0){
  console.log('cep em branco')

 this.alteradados.Endereco = this.alteradados.logradouro
 this.alteradados.Bairro = this.alteradados.bairro
 this.alteradados.Estado = this.alteradados.estado
 this.alteradados.Municipio = this.alteradados.localidade

  let novoCep = this.alteradados.cep.replace('-', '');
this.alteradados.Cep = novoCep

}else{
  console.log('ceo dados')

this.alteradados.Endereco =  this.personcepcpy.localidade 
this.alteradados.Bairro =  this.personcepcpy.bairro
this.alteradados.Estado =  this.personcepcpy.uf
this.alteradados.Cep =  this.personcepcpy.cep
this.alteradados.Municipio =  this.personcepcpy.logradouro
let novoCep = this.personcepcpy.cep.replace('-', '');
this.alteradados.Cep = novoCep

}


const validadecredito = this.convertDate(this.alteradados.creditol)

const { dddTelcompras, numeroTelcompras } = this.separarTelefone(this.alteradados.Telcompras);
console.log("DDD:", dddTelcompras);        // Saída: "DDD: 011"
console.log("Número:", numeroTelcompras);  // Saída: "Número: 963926953"



  const dadosCliente = {
A1_FILIAL: this.alteradados.Filial,
A1_COD:    this.alteradados.Codigo,
A1_LOJA:   this.alteradados.Loja,
A1_NOME:   this.alteradados.Nome,
A1_NREDUZ: this.alteradados.Nome2,
A1_END:    this.alteradados.Endereco,
A1_BAIRRO: this.alteradados.Bairro,
A1_EST:    this.alteradados.Estado,
A1_CEP:    this.alteradados.Cep,
A1_MUN:    this.alteradados.Municipio,
A1_DDD:    this.alteradados.Dddd,
A1_TIPO:   this.alteradados.Tipo,
A1_TEL:    this.alteradados.Telefone,
A1_CGC:    this.alteradados.Cnpj,
A1_CONTATO: this.alteradados.Contato,
A1_INSCR:   this.alteradados.Inscricao,
A1_LC:  this.alteradados.limitec,
A1_VENCLC:  validadecredito,
A1_MSALDO:  this.alteradados.saldopv,
A1_MCOMPRA:  this.alteradados.mcompra,
A1_PRICOM:  this.alteradados.primeiropv,
A1_ULTCOM:  this.alteradados.ultimopv,
A1_NROCOM:  this.alteradados.Ncompras,
A1_SALDUP:  this.alteradados.Saldupl,
A1_PAGATR:  this.alteradados.PagAtra,
A1_EMAIL:   this.alteradados.Email,
A1_DTNASC:  this.alteradados.Abertura,
A1_MSBLQL:  this.alteradados.Habilitado,
A1_SIMPNAC: this.alteradados.Simples,
A1_PESSOA:  this.alteradados.Pessoa,
A1_ATR:      this.alteradados.Financeiro,
A1_XOBSCLI:  this.alteradados.Obs,
A1_COD_MUN:  this.alteradados.Codmunicipio,
A1_NATUREZ:  this.alteradados.Fantasia,
A1_CONTRIB:  this.alteradados.Contribuinte,
A1_GRPTRIB:  this.alteradados.GrupoTrib,
A1_TIPCLI:   this.alteradados.Tipocliente,
A1_DTCAD:    this.alteradados.Datacadastro,
A1_XEMAIL0:  this.alteradados.emailcontas,
A1_XWZAP:    this.alteradados.whatswap,
A1_XDDDZAP:  this.alteradados.Dddzap,
A1_XDDD0:    dddTelcompras,
A1_XTELCP:   numeroTelcompras,
A1_CNAE:     this.alteradados.Cnae,
A1_RISCO:    this.alteradados.Risco,
 };

 console.log(dadosCliente)

  this.clienteService.atualizarCliente(dadosCliente)
    .subscribe(
      response => {
        console.log('Dados atualizados com sucesso', response);
      },
      error => {
        console.error('Erro ao atualizar dados', error);
      }
    );

 
}

separarTelefone(telefone: string): { dddTelcompras: string, numeroTelcompras: string } {
  const dddTelcompras = telefone.slice(0, 3);  // Pega os três primeiros dígitos como DDD
  const numeroTelcompras = telefone.slice(3);  // Pega o restante como número de telefone
  return { dddTelcompras, numeroTelcompras };
}


convertDate(date: string): string {
  return date.replace(/-/g, "");
}


}
