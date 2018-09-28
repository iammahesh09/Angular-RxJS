import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TODOS } from '../models/todos.module';


@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  private todosUrl: string = "https://jsonplaceholder.typicode.com";
  constructor(private _http: HttpClient) { }

  getTodos(): Observable<TODOS[]> {
    return this._http.get<TODOS[]>(`${this.todosUrl}/todos`)
  }

}
