import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  // Simulação de dados
  getClientes() {
    return [
      { nome: 'Cliente A', totalCompras: 150000 },
      { nome: 'Cliente B', totalCompras: 125000 },
      { nome: 'Cliente C', totalCompras: 90000 },
      { nome: 'Cliente D', totalCompras: 85000 },
      { nome: 'Cliente E', totalCompras: 80000 }
    ];
  }

  getVendedores() {
    return [
      { nome: 'Vendedor 1', totalVendas: 50000 },
      { nome: 'Vendedor 2', totalVendas: 45000 },
      { nome: 'Vendedor 3', totalVendas: 42000 },
      { nome: 'Vendedor 4', totalVendas: 40000 },
      { nome: 'Vendedor 5', totalVendas: 35000 }
    ];
  }

  getMetaVendas() {
    return {
      metaSemanal: 200000,
      metaRealizada: 180000
    };
  }
}
