import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class appservice {
  constructor(private httpClient: HttpClient) {}

  public getPublicApi(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
