import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule , MatInputModule , MatCardModule , MatAutocompleteModule , MatProgressSpinnerModule} from '@angular/material';
//for bootstrap
import {NgbModule , NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MiddleLayerDivComponent } from './middle-layer-div/middle-layer-div.component';
import { SerachBarComponent } from './serach-bar/serach-bar.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TopRatedMovieComponent } from './top-rated-movie/top-rated-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiddleLayerDivComponent,
    SerachBarComponent,
    SearchContentComponent,
    MovieDetailsComponent,
    TopRatedMovieComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
