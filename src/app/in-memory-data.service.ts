import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Guts' },
      { id: 11, name: 'Puck' },
      { id: 12, name: 'Skull Knight' },
      { id: 13, name: 'Judeau' },
      { id: 14, name: 'Casca' },
      { id: 15, name: 'Solid Snake' },
      { id: 16, name: 'Raiden' },
      { id: 17, name: 'Solaire of Astora' },
      { id: 18, name: 'Chosen Undead' },
      { id: 19, name: 'Artorias' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty, the method below returns the initial number (11).
  // If the heroes array is not empty, the method below returns the highest hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}