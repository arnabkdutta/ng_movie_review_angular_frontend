import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FetchMovieRecordsService } from "../service/fetch-movie-records.service";
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  MovieId: string;
  constructor(private route: ActivatedRoute, public movieService: FetchMovieRecordsService) { }

  ngOnInit() {
    this.MovieId = this.route.snapshot.params.id;
    this.movieService.getMovieNameById(this.MovieId).subscribe((data: any) => {
      console.log('movieDetails' , data);
    });
  }

}
