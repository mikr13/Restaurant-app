import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader.model';
import { Leaders } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(Leaders);
  }

  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(Leaders.filter((lead) => (lead.id === id))[0]);
    // as filter gives an array but we need element from that array so used 0 and arrow function
  }

  getFeaturedLeader(): Promise<Leader> {
    // normal function also
    return Promise.resolve(Leaders.filter(function(lead) {
      return lead.featured;
    })[0]);
  }
}
