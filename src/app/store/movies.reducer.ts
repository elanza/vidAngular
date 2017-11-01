import { Action } from '@ngrx/store';
import { MovieActions, GATHERED } from './movies.actions';
export interface MovieState {
  movies: any[];
  total: number;
}
export function moviesReducer(state: MovieState = { movies: [], total: 0 }, action: MovieActions) {
  switch (action.type) {
    case GATHERED:
      return { ...state, total: action.total, movies: state.movies.concat(action.values) };
    default:
      return state;
  }
}
