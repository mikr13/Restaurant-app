import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Dishes } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    // return Promise.resolve(Dishes);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Dishes);
      }, 1000);
    });
  }

  getDish(id: number): Promise<Dish> {
    // return Promise.resolve(Dishes.filter((dish) => (dish.id === id))[0]);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Dishes.filter((dish) => (dish.id === id))[0]);
      }, 1000);
    });
    // as filter gives an array but we need element from that array so used 0 and arrow function
  }

  getFeaturedDish(): Promise<Dish> {
    // normal function also
    /* return Promise.resolve(Dishes.filter(function(dish) {
      return dish.featured;
    })[0]); */

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Dishes.filter((dish) => (dish.featured))[0]);
      }, 1000);
    });
  }

}
