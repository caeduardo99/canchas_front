import { Component, OnInit } from '@angular/core';
import { CanchasService } from 'src/app/services/canchas.service';
import { Canchas } from '../models/canchas.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  canchas!: Canchas[];
  
  constructor(private canchasService: CanchasService) {}

  ngOnInit(){
    this.canchas = this.canchasService.getAll();
  }
}
