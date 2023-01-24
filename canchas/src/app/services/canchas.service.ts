import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CanchasService{
    getAll(){
        return[
            {name: 'Norte', image: '/assets/img/ubicacion.png'},
            {name: 'Centro', image: '/assets/img/ubicacion.png'},
            {name: 'Sur', image: '/assets/img/ubicacion.png'},
          

        ];
    }
}