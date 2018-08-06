import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Restangular } from 'ngx-restangular';

import { Leader } from '../shared/leader.model';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true })
      .pipe(map(leader => leader[0]));
  }


  /* Observable and http way
  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map(leader => leader[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }



  /* Observable way
  constructor() { }

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
