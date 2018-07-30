import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Dishes } from '../shared/dishes';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    // return Promise.resolve(Dishes); normal promise

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Dishes);
      }, 1000);
    }); and the delay promise for server latency dummy */

    return of(Dishes).pipe(delay(1000));
  }

  getDish(id: number): Observable<Dish> {
    // return Promise.resolve(Dishes.filter((dish) => (dish.id === id))[0]);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Dishes.filter((dish) => (dish.id === id))[0]);
      }, 1000);
    }); */
    // as filter gives an array but we need element from that array so used 0 and arrow function

    return of(Dishes.filter((dish) => (dish.id === id))[0]).pipe(delay(1000));
  }

  getFeaturedDish(): Observable<Dish> {
    // normal function also
    /* return Promise.resolve(Dishes.filter(function(dish) {
      return dish.featured;
    })[0]); */

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Dishes.filter((dish) => (dish.featured))[0]);
      }, 1000);
    }); */

    return of(Dishes.filter((dish) => (dish.featured))[0]).pipe(delay(1000));
  }

}
