import { Action } from '@ngrx/store';

export const GET = '[MOVIES] GET';
export const GATHERED = '[MOVIES] GATHERED';

export class GetMovies implements Action {
  readonly type = GET;
  constructor(public from: number, public size: number) { }
}

export class MoviesGathered implements Action {
  readonly type = GATHERED;
  constructor(public values: any[], public total: number) { }
}


export type MovieActions = GetMovies | MoviesGathered;
