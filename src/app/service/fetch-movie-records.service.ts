import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchMovieRecordsService {
  API_URL = "http://192.168.239.134:3000";
  // movieResult : any;
  constructor(private httpClient: HttpClient) { }

  getLatestMovie() {
    return this.httpClient.get(`${this.API_URL}/getTopRated`);
  }
  getMovieName(movieName) {
    return this.httpClient.get(`${this.API_URL}/getMovieName/movieName/${movieName}`);
  }
}
