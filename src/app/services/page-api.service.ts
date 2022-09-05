import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageApiService {

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get("https://api.themoviedb.org/3/list/1?api_key=d8ab8eb9d8f6c6034c0d9006765d3dd2&language=pt-BR")
      .pipe(
        tap(console.log)
      )
    ;
  }
}
