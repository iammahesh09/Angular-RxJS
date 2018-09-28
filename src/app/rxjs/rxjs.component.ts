import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  todos$: any;

  constructor(private _rxjsServices: RxjsService) { }

  ngOnInit() {
    this.todos$ = this._rxjsServices.getTodos()
  }


}
