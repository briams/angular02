import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor( private router: Router ) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSelected.emit( this.index );
  }

}
