
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CanchasItemComponent } from "./canchas-item.component";


@NgModule({
    declarations: [CanchasItemComponent],
    imports: [CommonModule,IonicModule],
    exports: [CanchasItemComponent],
    
})

export class CanchasItemModule{}