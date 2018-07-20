import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Dishes } from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] =  Dishes;

  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
