import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish.model';
// was not needed before in same page
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @Input() dish: Dish; previously when in same page
  dish: Dish;

  // selectedDish = this.dish; previously nothing in constructor and ngOnInit() {}

  constructor(private dishservice: DishService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id)
      .then(dish => this.dish = dish );
  }

  goBack(): void {
    this.location.back();
  }

}
