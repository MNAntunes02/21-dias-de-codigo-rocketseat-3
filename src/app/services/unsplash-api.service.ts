import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashApiService {

  loading = true;

  constructor(private httpClient: HttpClient) { }

  clientId = "lj-r3zBaYY72ZRADgmo01Wz5Zczi6MElk-3WtHHOOFw";

  getPhotos(search : string){
    return this.httpClient.get(`https://api.unsplash.com/search/photos?client_id=${this.clientId}&query=${search}`)
    .pipe(
      delay(1000),
      finalize(() => this.loading = false)
    )
  }

}
