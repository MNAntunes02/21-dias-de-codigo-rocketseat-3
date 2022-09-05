import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teclas',
  templateUrl: './teclas.component.html',
  styleUrls: ['./teclas.component.css']
})
export class TeclasComponent implements OnInit {

  letra = "a";

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("keydown", (event) => {
      console.log(event);
      this.letra = event.key;
    })
  }

  press(event: any){
    console.log(event);
    this.letra = event.key;
  }

}
