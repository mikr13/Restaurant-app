import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';

import { Promotion } from '../shared/promotion.model';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({ featured: true })
      .pipe(map(promotion => promotion[0]));
  }


  /* Observable and http way
  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(leader => leader[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }


  /* Observable way
  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    // return Promise.resolve(Promotions);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions);
      }, 1000);
    }); //

    return of(Promotions).pipe(delay(1000));
  }

  getPromotion(id: number): Observable<Promotion> {
    // return Promise.resolve(Promotions.filter((promo) => (promo.id === id))[0]);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => (promo.id === id))[0]);
      }, 1000);
    }); //
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
    }); //

    return of(Promotions.filter((promo) => (promo.featured))[0]).pipe(delay(1000));
  } */

}
