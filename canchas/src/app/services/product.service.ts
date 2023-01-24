import { Injectable } from "@angular/core";
import { Product } from "../pages/models/product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService{
    getAll(): Product[]{
        return[
            {
                id:1,
                ubication: 'Mariscal Lamar 10-40 y Coronel Talbolt',
                price:22.00,
                name:'Centro',
                image: '/assets/img/canchaprincipal.png'
            },
            {
                id:2,
                ubication: 'Presidente Rocafuerte y Garcia Moreno',
                price:22.99,
                name:'Totoracocha',
                image: '/assets/img/cancha2.png'
            },
            {
                id:3,
                ubication: 'Av del Estadio 2-20',
                price:15.00,
                name:'Estadio',
                image: '/assets/img/cancha3.png'
            },
            
        ];
    }

    getProduct(id:number): Product {
        return this.getAll().find((item) => item.id == id)!;
    }
}