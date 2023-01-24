import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  product!: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.id  = +this.activatedRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit() {
    this.product= this.productService.getProduct(this.id);
  }

}
