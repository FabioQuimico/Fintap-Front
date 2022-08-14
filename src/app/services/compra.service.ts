import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compra } from './@types/compra';
import { compraCompleta } from './@types/compraCompleta';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private apiUrl: string;
  private compras = [] as compra[];

  constructor(private http: HttpClient) { 
    this.apiUrl = 'https://cartao-fiap.herokuapp.com/';
  }

  getCompras(mes: number, ano: number) {
    let comprasCompletas = [] as compraCompleta[];
    return this.http.get<compraCompleta[]>(`${this.apiUrl}/extrato/${mes}/${ano}`);
  }

}
