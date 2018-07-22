import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader.model';
import { Leaders } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return Leaders;
  }

  getLeader(id: number): Leader {
    return Leaders.filter((lead) => (lead.id === id))[0];
    // as filter gives an array but we need element from that array so used 0 and arrow function
  }

  getFeaturedLeader(): Leader {
    // normal function also
    return Leaders.filter(function (lead) {
      return lead.featured;
    })[0];
  }
}
