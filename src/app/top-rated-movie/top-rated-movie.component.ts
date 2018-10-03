import { Component, OnInit } from "@angular/core";
import { FetchMovieRecordsService } from "../service/fetch-movie-records.service";
import { movieResult } from "../service/api-result.service";
// import { MatDialog, MatDialogConfig } from '@angular/material';
// import { MovieDetailsComponent } from "../movie-details/movie-details.component";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: "app-top-rated-movie",
  templateUrl: "./top-rated-movie.component.html",
  styleUrls: ["./top-rated-movie.component.css"],
  //providers: [NgbModalConfig, NgbModal]
})
export class TopRatedMovieComponent implements OnInit {
  movieNameFromJsonRecords: Array<object>;

  constructor(
    private movieService: FetchMovieRecordsService,
    private modalService: NgbModal
  ) {

    }

  ngOnInit() {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.movieService.getTopRatedMovie().subscribe((data: movieResult) => {
      this.movieNameFromJsonRecords = data.results;
    });
  }

  openDialog(content) {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(ModalComponent , { size: 'lg' });
    modalRef.componentInstance.title = content.title;
    modalRef.componentInstance.body = content.overview;
  }
}
