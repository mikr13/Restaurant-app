import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader.model';

import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  selectedLeader: Leader;

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    /* this.leaderservice.getLeaders()
      .then(leaders => this.leaders = leaders); */

    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

}
