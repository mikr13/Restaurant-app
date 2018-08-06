import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Promotion } from '../shared/promotion.model';
import { Leader } from '../shared/leader.model';

import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  leaderErrMess: string;
  promoErrMess: string;

  constructor(private dishService: DishService,
      private promotionService: PromotionService,
      private leaderService: LeaderService,
      @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess.message);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess.message);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess.message);


    /*
    this.dishservice.getFeaturedDish()
      .then(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion()
      .then(promotion => this.promotion = promotion );
    this.leaderservice.getFeaturedLeader()
      .then(leader => this.leader = leader); for promises */

    /* Observable subscribe
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,
      dishErrMess => this.dishErrMess = <any>dishErrMess);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion,
      promoErrMess => this.promoErrMess = <any>promoErrMess);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader,
      leaderErrMess => this.leaderErrMess = <any>leaderErrMess); */
  }

}
