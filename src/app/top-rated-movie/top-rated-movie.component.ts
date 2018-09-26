import { Component, OnInit } from "@angular/core";
import { FetchMovieRecordsService } from "../service/fetch-movie-records.service";

@Component({
  selector: "app-top-rated-movie",
  templateUrl: "./top-rated-movie.component.html",
  styleUrls: ["./top-rated-movie.component.css"]
})
export class TopRatedMovieComponent implements OnInit {
  movieNameFromJsonRecords: Array<object>;
  constructor(private movieService: FetchMovieRecordsService) {}

  ngOnInit() {
    this.getLatestMovies();
  }
  
  public getLatestMovies() {
    this.movieService.getLatestMovie().subscribe((data: Array<object>) => {
      this.movieNameFromJsonRecords = data;
      // console.log(this.movieNameFromJsonRecords);
    });
  }
}
