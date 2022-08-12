import { Component, Input, OnInit } from '@angular/core';
import { compra } from 'src/app/services/@types/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  compras = [] as compra[];
  @Input()
  mes = 0;
  nomeMes = "";
  @Input()
  ano = 0;
  total = 0;

  constructor(private compraService: CompraService) { }
  
  ngOnInit(): void {
    this.nomeMes = MESES[this.mes];
    this.compras = this.compraService.getCompras();
  }
  ngOnChanges(): void {
    this.nomeMes = MESES[this.mes];
  }

  somaTotal(valor: number): void {
    this.total += valor;
  }
}

enum MESES {
  Janeiro = 1,
  Fevereiro = 2,
  Março = 3,
  Abril = 4,
  Maio = 5,
  Junho = 6,
  Julho = 7,
  Agosto = 8,
  Setembro = 9,
  Outubro = 10,
  Novembro = 11,
  Dezembro = 12
}