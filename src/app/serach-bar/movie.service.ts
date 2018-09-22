import { Injectable } from '@angular/core';
import { movieRecords } from "../data/mock-data";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getMovieName() { return movieRecords[0].results; }
}
