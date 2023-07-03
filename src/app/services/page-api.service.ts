import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageApiService {

  loading = false;

  constructor(private httpClient: HttpClient) { }

  getMovies(num: number){
    this.loading = true;
    return this.httpClient.get(`https://api.themoviedb.org/3/list/${num}?api_key=d8ab8eb9d8f6c6034c0d9006765d3dd2&language=pt-BR`)
      .pipe(
        delay(3000),
        finalize(() => this.loading = false)
      )
    ;
  }
}
