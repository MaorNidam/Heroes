import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { IHero } from 'src/models/IHero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes.slice(1, 5) );
  }

  heroes: IHero[] = [];
}
