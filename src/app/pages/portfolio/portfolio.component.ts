import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  fa = faArrowUpRightFromSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
