
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ProductCardComponent } from "./product-card.component";



@NgModule({
    declarations: [ProductCardComponent],
    imports: [CommonModule,IonicModule],
    exports: [ProductCardComponent],
    
})

export class ProdutCardModule{}