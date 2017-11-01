import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieService } from './services/movie.service';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { moviesReducer } from './store/movies.reducer';
import { MoviesEffects } from './store/movies.effects';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    InfiniteScrollModule,
    Ng2SearchPipeModule,
    StoreModule.forRoot({ movies: moviesReducer }),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    })
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
