import { GetMovies, MoviesGathered, GET } from './movies.actions';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';


@Injectable()
export class MoviesEffects {
  @Effect() get$ = this.actions$
    .ofType(GET)
    .flatMap((action: GetMovies) => {
      return this.getExternalData()
        .map(({ videos, result_count }) => {
          return { movies: this.simulatePagination(videos, action.from, action.size), total: result_count };
        })
        .map(({ movies, total }) => new MoviesGathered(movies, total));
    })
  ;


  constructor(private http: Http, private actions$: Actions) { }

  getExternalData() {
    return this.http.get('assets/posts.json').map(response => response.json())
  }

  simulatePagination(data: any[], from: number, size: number) {
    console.log(from, size)
    return data.slice(from, from + size);
  }
}
