import { Component, Input, OnInit } from '@angular/core';
import { compra } from 'src/app/services/@types/compra';
import { compraCompleta } from 'src/app/services/@types/compraCompleta';
import { CompraService } from 'src/app/services/compra.service';
import { Subject } from 'rxjs';

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

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  compras = [] as compra[];
  comprasCompletas = [] as compraCompleta[];
  @Input()
  mes = 0;
  nomeMes = "";
  @Input()
  ano = 0;
  total = 0;
  
  private clienteSource = new Subject();
  ClienteProvider = this.clienteSource.asObservable();

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.nomeMes = MESES[this.mes];
    this.compraService.getCompras(this.mes, this.ano).subscribe(
      comprasComp => {comprasComp.forEach(
        compraComp => this.montaCompra(compraComp)
        );}
    );
  }

  private montaCompra(compraComp: compraCompleta) {
    let compraNova = {} as compra;
    compraNova.data = compraComp.dataCompra;
    compraNova.valor = compraComp.valorCompra;
    compraNova.descricao = compraComp.situacaoCompra;
    this.compras.push(compraNova);
    this.notifyCliente(compraComp.nomeCliente);
  }

  ngOnChanges(): void {
    this.nomeMes = MESES[this.mes];
    this.compraService.getCompras(this.mes, this.ano).subscribe(
      comprasComp => {
        comprasComp.forEach(
          compraComp => {this.montaCompra(compraComp);}
        );
      }
    );
  }

  somaTotal(valor: number): void {
    this.total += valor;
  }

  notifyCliente(nomeCliente: String) {
    this.clienteSource.next(nomeCliente);
  }

}


