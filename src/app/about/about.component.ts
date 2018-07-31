import { Component, OnInit, Inject } from '@angular/core';

import { Leader } from '../shared/leader.model';

import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  leaderErrMess: string;

  constructor(private leaderService: LeaderService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    /* this.leaderservice.getLeaders()
      .then(leaders => this.leaders = leaders); */

    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,
      leaderErrMess => this.leaderErrMess = <any>leaderErrMess);
  }

}
