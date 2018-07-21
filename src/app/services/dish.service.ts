import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Dishes } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return Dishes;
  }
  getDish(id: number): Dish {
    return Dishes.filter((dish) => (dish.id === id))[0];
    // as filter gives an array but we need element from that array so used 0 and arrow function
  }

  getFeaturedDish(): Dish {
    // normal function also
    return Dishes.filter(function(dish) {
      return dish.featured;
    })[0];
  }

}
