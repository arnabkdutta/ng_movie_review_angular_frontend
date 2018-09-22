import { Component, OnInit } from '@angular/core';
import { MovieService } from "../serach-bar/movie.service";

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css']
})
export class SearchContentComponent implements OnInit {
  
  movieNameFromJsonRecords: any;
  constructor(public movieName: MovieService) { 
  }

  ngOnInit() {
    this.movieNameFromJsonRecords = this.movieName.getMovieName();
  }

}
