import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/i-item';
// import { IItem } from 'src/app/interfaces/i-item';
import { PageApiService } from 'src/app/services/page-api.service';

@Component({
  selector: 'app-page-api',
  templateUrl: './page-api.component.html',
  styleUrls: ['./page-api.component.css']
})
export class PageApiComponent implements OnInit {

  teste: any;
  arrItems: IItem[] = [];

  constructor(private pageApiService: PageApiService) { }

  ngOnInit(){

    this.pageApiService.getMovies().subscribe( params => {
      this.teste = params;
      this.arrItems = this.teste.items;
    })
          
  }
   
  


}
