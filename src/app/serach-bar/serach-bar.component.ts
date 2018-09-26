import { Component, OnInit } from '@angular/core';
import { MovieService } from "./movie.service";
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { FetchMovieRecordsService } from "../service/fetch-movie-records.service";
@Component({
  selector: 'app-serach-bar',
  templateUrl: './serach-bar.component.html',
  styleUrls: ['./serach-bar.component.css']
})
export class SerachBarComponent implements OnInit {
  movieNameFromJsonRecords: any;
  movieNameFromTextBox: any;
  fetchedMoviesName: any;
  movieNameExistOrNot: boolean;
  isLoading: boolean;
  constructor(public movieName: FetchMovieRecordsService) {
  }

  ngOnInit() {
  }

  getMovieName(formContent) {
    console.log(formContent.movieName.value);
    // console.log(this.movieName.FetchMovieRecordsService());
  }

  movieNamePredict(event: any) {
    this.movieNameFromTextBox = event.target.value;
    // this.movieNameFromJsonRecords = this.movieName.FetchMovieRecordsService();
    let movieName = this.movieNameFromJsonRecords.filter(movie => {
      if (movie.original_title.toUpperCase() === this.movieNameFromTextBox.toUpperCase()) {
        return movie;
      }
    });
    if (movieName.length > 0) {
      this.movieNameExistOrNot = true;
      this.fetchedMoviesName = movieName;
    }
    else {
      this.movieNameExistOrNot = false;
    }
  }

  movieNameAutoComplete(event: any) {
    this.movieNameFromTextBox = event.target.value;
    if (this.movieNameFromTextBox) {
      // this.movieName.getMovieName(this.movieNameFromTextBox).subscribe((data: any) => {
      //   this.fetchedMoviesName = data.results;
      //   this.movieNameExistOrNot = true;
      // });
      this.movieName.getMovieName(this.movieNameFromTextBox).pipe(
        debounceTime(300),
        tap(() => {
          this.isLoading = true
          this.movieNameExistOrNot = true
        })
      ).subscribe((data: any) => {
        this.fetchedMoviesName = data.results;
        this.movieNameExistOrNot = true;
        this.isLoading = false
      });
    }
  }
  focusInFunction() {
    this.movieNameExistOrNot = false;
  }

}
