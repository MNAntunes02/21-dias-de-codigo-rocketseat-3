import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IItem } from 'src/app/interfaces/i-item';
import { PageApiService } from 'src/app/services/page-api.service';

@Component({
  selector: 'app-page-api',
  templateUrl: './page-api.component.html',
  styleUrls: ['./page-api.component.css']
})
export class PageApiComponent implements OnInit {

  faArrow = faArrowRight

  item: any;
  arrList: any = [];
  arrItems: IItem[] = [];
  load:boolean = true;


  @ViewChildren('paths') paths! : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('roll') roll! : QueryList<ElementRef<HTMLDivElement>>;

  constructor(public pageApiService: PageApiService) { }

  ngOnInit(){

    this.load = this.pageApiService.loading;
    
    for (let i = 1; i < 6; i++) {
      this.pageApiService.getMovies(i).subscribe( params => {
        this.item = params;
        this.arrList.push(this.item);
      })
    } 
  }

  hiddenImg(num: number, list: number){
    let cont = 0;
    for (let i = 0; i < list; i++) {
      cont += this.arrList[i].items.length
    }
    cont += num;
    this.paths.get(cont)?.nativeElement.getElementsByClassName("path-to-back")[0].setAttribute('class','path-to-back opacity-0 -z-10')
  }

  showImg(num: number, list: number){

    let cont = 0;
    for (let i = 0; i < list; i++) {
      cont += this.arrList[i].items.length
    }
    cont += num;
    this.paths.get(cont)?.nativeElement.getElementsByClassName("path-to-back")[0].setAttribute('class','path-to-back opacity-100 z-10')
  }

  rollMoviesNext(list:number){
    // let width = this.roll.nativeElement.scrollWidth;
    let left = this.roll.toArray()[list].nativeElement.scrollLeft;

    this.roll.toArray()[list].nativeElement.scrollLeft += 1200;

  }

  rollMoviesBack(list:number){
    // let width = this.roll.nativeElement.scrollWidth;
    let left = this.roll.toArray()[list].nativeElement.scrollLeft;

    this.roll.toArray()[list].nativeElement.scrollLeft -= 1200;
  }

}
