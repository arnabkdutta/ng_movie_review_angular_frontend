import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchMovieRecordsService {
  API_URL = "http://GX-ZU2APPDLV113.glblclouddev.ad.pwcinternal.com:3000";
  constructor(private httpClient : HttpClient) { }
  
  getLatestMovie(){
    return  this.httpClient.get(`${this.API_URL}/getTopRated`);
  }
}
