import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit {

  faBars = faBars;

  @ViewChild('menucheck') menucheck!: ElementRef<HTMLInputElement>;
  @ViewChild('menu') menu!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.menucheck);   

    // this.menucheck.nativeElement.checked ? 
    // this.menu.nativeElement.setAttribute("class","grid grid-cols-1 absolute right-0 bg-gray-100 gap-4 p-6 pt-0 rounded-lg top-0 duration-500")
    // : this.menu.nativeElement.setAttribute("class","grid grid-cols-1 absolute -right-52 bg-gray-100 gap-4 p-6 pt-0 rounded-lg top-0 duration-500")
  }

  openMenu(){
    this.menucheck.nativeElement.checked ? 
    this.menu.nativeElement.setAttribute("class","grid grid-cols-1 absolute -right-52 bg-black gap-6 p-6 pt-0 rounded-lg top-4 duration-500")
    : this.menu.nativeElement.setAttribute("class","grid grid-cols-1 absolute right-0 bg-black gap-6 p-6 pt-0 rounded-lg top-4 duration-500")
  }

}
