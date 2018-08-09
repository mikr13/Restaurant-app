import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';

import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feed: Feedback): Observable<Feedback[]> {
    return this.restangular.all('feedback').post(feed);
  }
}
