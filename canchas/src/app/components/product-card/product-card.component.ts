import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Product } from 'src/app/pages/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() item!: Product

  @Output() clicked =new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
