import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish.model';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input() dish: Dish;

  selectedDish = this.dish;

  constructor() { }

  ngOnInit() {
  }

}
