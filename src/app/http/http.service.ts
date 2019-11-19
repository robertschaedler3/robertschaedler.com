import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  data$: Observable<any>;

  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.data$ = this.http.get(url).pipe(
      map(data => _.values(data)),
      tap(console.log),
    );
  }

}