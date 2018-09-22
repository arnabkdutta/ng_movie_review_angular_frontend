import { Component, OnInit } from '@angular/core';
import { MovieService } from "./movie.service";
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
  constructor(public movieName: MovieService) {
  }

  ngOnInit() {
  }

  getMovieName(formContent) {
    console.log(formContent.movieName.value);
    console.log(this.movieName.getMovieName());
  }

  movieNamePredict(event: any) {
    this.movieNameFromTextBox = event.target.value;
    this.movieNameFromJsonRecords = this.movieName.getMovieName();
    let movieName = this.movieNameFromJsonRecords.filter(movie => {
      if (movie.original_title.toUpperCase() === this.movieNameFromTextBox.toUpperCase()) {
        return movie;
      }
    });
    if (movieName.length > 0) {
      console.log(movieName);
      this.movieNameExistOrNot = true;
      this.fetchedMoviesName = movieName;
    }
    else{
      this.movieNameExistOrNot = false;
    }
  }
  focusInFunction(){
    this.movieNameExistOrNot = false;
  }

}
