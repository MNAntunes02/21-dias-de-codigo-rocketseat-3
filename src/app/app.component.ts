import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { InstagramComponent } from './instagram/instagram.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '21-dias-de-codigo-semana-3';

  faFileLine = faFileLines

  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(InstagramComponent)
  }

}
