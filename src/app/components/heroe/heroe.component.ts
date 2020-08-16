import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  casas = {
    DC: {
      img: "assets/img/dc.jpg",
    },
    Marvel: {
      img: "assets/img/marvel.jpg",
    }
  }

  constructor(  public activatedRoute: ActivatedRoute,
                public _heroesService: HeroesService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.heroe = this._heroesService.getHeroe( id );
    // this.activatedRoute.params.subscribe( params => {
    //   this.heroe = this._heroesService.getHeroe( params['id'] );
    // });

  }

  ngOnInit(): void {
  }

}
