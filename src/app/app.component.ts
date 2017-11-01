import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, OnDestroy {


  post$: Observable<Array<any>>;
  finished = false;
  sum = 5;
  total = 0;

  constructor(private http: HttpClient, private _ms: MovieService) { }


  onScroll(event) {
    const start = this.sum;
    this.sum += 5;
    if (start < this.total) {
      this._ms.loadMovies(start, this.sum);
    } else {
      this.finished = true;
    }

  }

  ngOnInit() {
    this._ms.loadMovies(0, 10);
    this.post$ = this._ms.movies();
    this._ms.total().subscribe((total) => {
      this.total = total;
    });
  }

  ngOnDestroy(): void {

  }
}
