import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CanchasItemModule } from 'src/app/components/canchas-item/canchas-item.module';
import { ProdutCardModule } from 'src/app/components/product-card/product-card.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CanchasItemModule,
    ProdutCardModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
