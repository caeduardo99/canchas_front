import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CanchasService{
    getAll(){
        return[
            {name: 'Sect', image: '/assets/img/cancha.png'},
            
        ]
    }
}