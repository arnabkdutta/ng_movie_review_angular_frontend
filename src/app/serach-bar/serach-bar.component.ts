import { Component, OnInit } from '@angular/core';
import { MovieService } from "./movie.service";
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { FetchMovieRecordsService } from "../service/fetch-movie-records.service";
import { FormBuilder, FormGroup } from '@angular/forms';

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
  usersForm: FormGroup;
  constructor(public movieName: FetchMovieRecordsService, private fb: FormBuilder ) {
  }

  ngOnInit() {
    // this.movieNameAutoComplete();
    this.usersForm = this.fb.group({
      userInput: null
    })

  }

  getMovieName(formContent) {
    console.log(formContent.movieName.value);
    // console.log(this.movieName.FetchMovieRecordsService());
  }

  movieNameAutoComplete(event: any) {
    this.movieNameFromTextBox = event.target.value;

    //if (this.movieNameFromTextBox) {
    // this.movieName.getMovieName(this.movieNameFromTextBox).subscribe((data: any) => {
    //   this.fetchedMoviesName = data.results;
    //   this.movieNameExistOrNot = true;
    // });
    if (this.movieNameFromTextBox) {
      this.usersForm
        .get('userInput')
        .valueChanges
        .pipe(
          debounceTime(300),
          tap(() => {
            this.isLoading = true
            this.movieNameExistOrNot = false;
          }),
          switchMap(value => this.movieName.getMovieName(value)
            .pipe(
              finalize(() => this.isLoading = false),
            )
          )
        )
        .subscribe((users: any) => {
          this.fetchedMoviesName = users.results
          this.movieNameExistOrNot = true;
        });
    }

  }
  focusInFunction() { // hide the seach result
    this.movieNameExistOrNot = false;
  }

  serachResultHide(){ //ide the seach
    this.movieNameExistOrNot = false;
  }

  focusoutHideSearchBar(){
    this.movieNameExistOrNot = false;
  }

}
