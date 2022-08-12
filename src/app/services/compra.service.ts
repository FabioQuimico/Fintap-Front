import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compras = [
    {
      data: '05/08/2022',
      descricao: "Vendedor de Mariola",
      valor: 100.00,
    },
    {
      data: '06/08/2022',
      descricao: "Vendedor de Goiabada Cascão",
      valor: 200.00,
    },
    {
      data: '07/08/2022',
      descricao: "Vendedor de Frutos do Mar",
      valor: 300.00,
    }
  ]

  getCompras() {
    return this.compras;
  }

  constructor() { }
}
