
import { CommonModule } from "@angular/common";
import { Injectable, NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CanchasItemComponent } from "./canchas-item.component";


@NgModule({
    declarations: [CanchasItemComponent],
    imports: [CommonModule,IonicModule],
    exports: [CanchasItemComponent],
    
})

export class CanchasItemModule{}