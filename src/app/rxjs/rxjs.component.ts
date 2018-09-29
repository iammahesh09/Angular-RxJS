import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import { HttpClient } from '@angular/common/http';
import { TODOS } from '../models/todos.module';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  data
  todos$: any;

  constructor(private _rxjsServices: RxjsService, private _http: HttpClient) { }

  ngOnInit() {
    this.todos$ = this._http.get<TODOS[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(res => {
          return res.map(el => ({ id: el.id, title: el.title, completed: el.completed }))
        }),
        catchError(error => {
          return throwError("Somthing went wrong");
        })
      )
  }


}
