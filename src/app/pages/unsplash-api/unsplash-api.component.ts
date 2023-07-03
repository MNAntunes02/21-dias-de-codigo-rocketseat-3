import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/i-photo';
import { UnsplashApiService } from 'src/app/services/unsplash-api.service';

@Component({
  selector: 'app-unsplash-api',
  templateUrl: './unsplash-api.component.html',
  styleUrls: ['./unsplash-api.component.css']
})
export class UnsplashApiComponent implements OnInit {

  @ViewChild("text") text!: ElementRef<HTMLInputElement>;

  teste: any;
  arrPhotos: IPhoto[] = [];

  constructor(public unsplashApi: UnsplashApiService) { }

  ngOnInit(): void {

    this.unsplashApi.getPhotos("sky").subscribe(params => {

        this.teste = params;
        this.arrPhotos = this.teste.results;
        console.log(this.arrPhotos);

      } 
    )

  }

  getWord(){

    this.unsplashApi.getPhotos(this.text.nativeElement.value).subscribe(params => {

      this.teste = params;
      this.arrPhotos = this.teste.results;
      console.log(this.arrPhotos);

    } 
  )

  }


}
