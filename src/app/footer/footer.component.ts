import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
