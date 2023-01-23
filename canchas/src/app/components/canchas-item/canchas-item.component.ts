import { Component, Input, OnInit } from '@angular/core';
import { Canchas } from 'src/app/pages/models/canchas.model';

@Component({
  selector: 'app-canchas-item',
  templateUrl: './canchas-item.component.html',
  styleUrls: ['./canchas-item.component.scss'],
})
export class CanchasItemComponent implements OnInit {
  @Input() item!: Canchas;
  constructor() { }

  ngOnInit() {}

}
