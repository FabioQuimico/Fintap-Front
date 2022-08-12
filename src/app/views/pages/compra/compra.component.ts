import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { compra } from 'src/app/services/@types/compra';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  @Input()
  compraProp = {} as compra;

  @Output()
  notify = new EventEmitter();

  constructor() { 
  }
  
  ngOnInit(): void {
    this.notify.emit();
  }
}
