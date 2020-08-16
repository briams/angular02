import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  search: string;

  constructor(public activatedRoute: ActivatedRoute,
              private router: Router,
              public _heroesService: HeroesService) {
    // this.search = this.activatedRoute.snapshot.paramMap.get('search');
    // this.heroes = this._heroesService.searchHeroe( this.search );
    this.activatedRoute.params.subscribe( params => {
      this.search = params['search'];
      this.heroes = this._heroesService.searchHeroe( this.search );
    });
  }

  ngOnInit(): void {
  }

  showHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
