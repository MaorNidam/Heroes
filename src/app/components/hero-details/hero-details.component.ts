import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero.service';
import { IHero } from 'src/models/IHero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero?: IHero;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  save() {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
