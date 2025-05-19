import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType, PoDialogService, PoRadioGroupOption, poThemeDefaultActions, poThemeDefaultActionsDark, poThemeDefaultDarkValues, poThemeDefaultFeedback, poThemeDefaultFeedbackDark, poThemeDefaultLightValues, poThemeDefaultNeutrals, PoThemeService, PoThemeTypeEnum } from '@po-ui/ng-components';
import { DashboardService } from './dashboard.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { VendedorService } from './vendedor.service';
import { Chart, registerables } from 'chart.js';
import { PoThemeModule } from '@po-ui/ng-components';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;


  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Padrão', value: 0 },
    { label: 'Escuro', value: 1 }
  ];
  
  coffeeConsumption: Array<PoChartSerie> = [];
  vendascliente: Array<PoChartSerie> = [];
  private apiUrl = 'http://192.168.0.230:3000/graficos/vendedor'; // Altere para sua URL de API

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['Jan-24', 'Feb-24', 'Mar-24', 'Abr-24', 'Mai-24', 'Jun-24', 'Jul-24','Ago-24','Set-24','Out-24','Nov-24','Dez-24'];

  chartAreaCategories: Array<string> = ['Jan-24', 'Feb-24', 'Mar-24', 'Abr-24', 'Mai-24', 'Jun-24', 'Jul-24','Ago-24','Set-24','Out-24','Nov-24','Dez-24'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];


  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes',
    'Icetea'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Meta Vendas Mes a Mes', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area,color: 'po-color-07' },
    { label: 'Vendas Mes a Mes', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Faturaento Mes a Mes', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    { label: 'Devoluções Mes a Mes', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    
  ];

  
  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 2796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley’s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet’s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully’s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin’ Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2
    }
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    }
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7
    }
  };
  errorMessage: any;
  vendedores: any;

  constructor(private poAlert: PoDialogService,
    private dashboardService: DashboardService,
    private http: HttpClient,
    private vendedorService: VendedorService,
    private poTheme: PoThemeService,
    private authService: AuthService,
    private router: Router,
  ) {  Chart.register(...registerables);

    const _poTheme = this.poTheme.persistThemeActive();
    if (!_poTheme) {
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }

    this.poTheme.setTheme(this.poThemeSample, this.theme);
  }


  searchMore(event: any) {
    window.open(`http://google.com/search?q=coffee+producing+${event.label}`, '_blank');
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: `${event.label} consuming ${event.data}kg per capita!`,
      ok: () => {}
    });
  }

  clientes: any[] = [];
  meta: any = {};
  metaano: any = {};
  resultadoFinal: any


  ngOnInit(): void {

    const currentUser = this.authService.getCurrentUser();

    // // Verifica se currentUser não é null
    // if (currentUser !== null) {
    //   const allowedUsers = ['000024', '000032', '000033', '000034' ];

    //   if (!allowedUsers.includes(currentUser)) {
    //     alert('Acesso negado. Redirecionando para a página de acesso negado.');
    //     this.router.navigate(['/acesso-negado']); // Redireciona para a página de acesso negado se o usuário não estiver permitido
    //   }
    // } else {
    //   alert('Usuário não autenticado. Redirecionando para a página de login.');
    //   this.router.navigate(['/login']); // Redireciona para o login se currentUser for null
    // }




    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);

    this.clientes = this.dashboardService.getClientes();
    this.meta = this.dashboardService.getMetaVendas();
    this.getVendedores('NomeDoVendedor');
    this.getClientes('cliente');
    this.getmetaano('metaano');
    this.createLineChart();
    
  }

   // Método para buscar vendedores usando o serviço
   getVendedores(vendedor: string): void {
    this.vendedorService.getVendedores(vendedor).subscribe(
      data => {
        this.vendedores = data.items; // Atribui o resultado à variável de vendedores
        console.log('Dados recebidos VENDEDOR:', this.vendedores);
        this.coffeeConsumption = this.vendedores
      },
      error => {
        this.errorMessage = error;
        console.error('Erro:', error);
      }
    );
  }

  // Método para buscar vendedores usando o serviço
  getClientes(cliente: string): void {
    this.vendedorService.getclientes(cliente).subscribe(
      data => {
        this.clientes = data.items; // Atribui o resultado à variável de clientees
        console.log('Dados recebidos CLIENTE:', this.clientes);
        this.vendascliente = this.clientes
      },
      error => {
        this.errorMessage = error;
        console.error('Erro:', error);
      }
    );
  }

   // Método para buscar vendedores usando o serviço
   getmetaano(metaano: string): void {
    this.vendedorService.getmetaano(metaano).subscribe(
      data => {
        this.metaano = data.items; // Atribui o resultado à variável de clientees
         const valores = Object.values(this.metaano[0]);
       // console.log(valores);
        const valormes = [{ data: valores }];
        this.resultadoFinal = [{ label: 'Meta Vendas Mes a Mes', valormes,color: 'po-color-07' }],
        //{ label: 'Vendas Mes a Mes', data: valores, type: PoChartType.Area },
       // { label: 'Faturaento Mes a Mes', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
       //{ label: 'Devoluções Mes a Mes', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area }]
        console.log('Dados recebidos META:', this.resultadoFinal);

        this.participationByCountryInWorldExports = this.resultadoFinal

               


      //  console.log(resultadoFinal);


      //  this.metaano = this.resultadoFinal
      },
      error => {
        this.errorMessage = error;
        console.error('Erro:', error);
      }
    );
  }

  createLineChart() {
    // Dados da API
    const dataAPI = [
      1375521.5079999997, 995116.1159999999, 1066002.8039999998,
      1501479.3649999995, 1097785.1479999998, 1725419.74,
      1320641.1709999999, 1610537.7750000004, 1106864.2480000001, 0, 0, 0
    ];

    // Meta fixa
    const meta = new Array(12).fill(1000000);

    // Devoluções, simuladas como 5% do faturamento
    const devolucoes = dataAPI.map(val => val * 0.05);

    // Rótulos dos meses
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    // Criar o gráfico
    new Chart("lineChart", {
      type: 'line',
      data: {
        labels: meses,
        datasets: [
          {
            label: 'Meta Vendas Mês a Mês',
            data: meta,
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false
          },
          {
            label: 'Vendas Mês a Mês',
            data: dataAPI,
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false
          },
          {
            label: 'Faturamento Mês a Mês',
            data: dataAPI,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
          },
          {
            label: 'Devoluções Mês a Mês',
            data: devolucoes,
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Comparação de Meta, Vendas, Faturamento e Devoluções'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Valor (em milhões)'
            }
          }
        }
      }
    });
  }


}
