import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Leader } from '../shared/leader.model';
import { baseURL } from '../shared/baseurl';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders');
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map(leader => leader[0]));
  }



  /* constructor() { }

  getLeaders(): Observable<Leader[]> {
    // return Promise.resolve(Leaders);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Leaders);
      }, 1000);
    }); //

    return of(Leaders).pipe(delay(1000));
  }

  getLeader(id: number): Observable<Leader> {
    // return Promise.resolve(Leaders.filter((lead) => (lead.id === id))[0]);

    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(Leaders.filter((lead) => (lead.id === id))[0]);
      }, 1000);
    }); //
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
    }); //

    return of(Leaders.filter((lead) => (lead.featured))[0]).pipe(delay(1000));
  } */

}
