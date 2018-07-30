import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion.model';
import { Promotions } from '../shared/promotions';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    // return Promise.resolve(Promotions);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions);
      }, 1000);
    }); */

    return of(Promotions).pipe(delay(1000));
  }

  getPromotion(id: number): Observable<Promotion> {
    // return Promise.resolve(Promotions.filter((promo) => (promo.id === id))[0]);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => (promo.id === id))[0]);
      }, 1000);
    }); */
    // as filter gives an array but we need element from that array so used 0 and arrow function

    return of(Promotions.filter((promo) => (promo.id === id))[0]).pipe(delay(1000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // normal function also
    /* return Promise.resolve(Promotions.filter(function (promo) {
      return promo.featured;
    })[0]); */

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => (promo.featured))[0]);
      }, 1000);
    }); */

    return of(Promotions.filter((promo) => (promo.featured))[0]).pipe(delay(1000));
  }

}
