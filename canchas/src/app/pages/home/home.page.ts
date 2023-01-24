import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanchasService } from 'src/app/services/canchas.service';
import { ProductService } from 'src/app/services/product.service';
import { Canchas } from '../models/canchas.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  canchas!: Canchas[];
  products!: Product[];
  
  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 4.2,
    slidesOffsetBefore: 0,
  };

  constructor(
    private canchasService: CanchasService ,
    private productService: ProductService,
    private router: Router,
    ) {}

  ngOnInit(){
    this.canchas = this.canchasService.getAll();
    this.products = this.productService.getAll();
  }
  goToDetailPage(id: number){
    this.router.navigate(['detail',id])
  }
}
