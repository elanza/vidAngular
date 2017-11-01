import { GetMovies } from '../store/movies.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

@Injectable()
export class MovieService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http, private store: Store<any>) { }

  movies() {
    return this.store.select('movies').map(values => values.movies);
  }

  loadMovies(from: number, size: number) {
    this.store.dispatch(new GetMovies(from, size));
  }

  total() {
    return this.store.select('movies').map(values => values.total);
  }


}
