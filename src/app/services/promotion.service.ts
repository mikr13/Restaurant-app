import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion.model';
import { Promotions } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    // return Promise.resolve(Promotions);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions);
      }, 1000);
    });
  }
  getPromotion(id: number): Promise<Promotion> {
    // return Promise.resolve(Promotions.filter((promo) => (promo.id === id))[0]);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => (promo.id === id))[0]);
      }, 1000);
    });
    // as filter gives an array but we need element from that array so used 0 and arrow function
  }

  getFeaturedPromotion(): Promise<Promotion> {
    // normal function also
    /* return Promise.resolve(Promotions.filter(function (promo) {
      return promo.featured;
    })[0]); */

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => (promo.featured))[0]);
      }, 1000);
    });
  }

}
