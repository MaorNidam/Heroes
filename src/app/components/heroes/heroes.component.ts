import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';
import { IHero } from 'src/models/IHero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroes: IHero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    },(e) => {
      console.log(e);
      this.messageService.add("Failed to get heros.");
    });
  }

  add(name: string): void {
    name= name.trim();
    if (!name) {return}
    this.heroService.addHero({name} as IHero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

  delete(hero: IHero) {
    this.heroes = this.heroes.filter(heroFromArray => heroFromArray != hero );
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
