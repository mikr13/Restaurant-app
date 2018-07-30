import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader.model';
import { Leaders } from '../shared/leaders';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    // return Promise.resolve(Leaders);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Leaders);
      }, 1000);
    }); */

    return of(Leaders).pipe(delay(1000));
  }

  getLeader(id: number): Observable<Leader> {
    // return Promise.resolve(Leaders.filter((lead) => (lead.id === id))[0]);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Leaders.filter((lead) => (lead.id === id))[0]);
      }, 1000);
    }); */
    // as filter gives an array but we need element from that array so used 0 and arrow function

    return of(Leaders.filter((lead) => (lead.id === id))[0]).pipe(delay(1000));
  }

  getFeaturedLeader(): Observable<Leader> {
    // normal function also
    /* return Promise.resolve(Leaders.filter(function(lead) {
      return lead.featured;
    })[0]); */

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Leaders.filter((lead) => (lead.featured))[0]);
      }, 1000);
    }); */

    return of(Leaders.filter((lead) => (lead.featured))[0]).pipe(delay(1000));
  }

}
