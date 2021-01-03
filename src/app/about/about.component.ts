import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
  fade
  ]
})
export class AboutComponent implements OnInit {

  listOfKeyEmployees = [
    {
      name: 'Kamen Dimitrov',
      position: 'Founding Member',
      link: 'kamen004@abv.bg',
      imageLink: '../../assets/Dimitrov.jpg',
      linkedin: 'https://www.linkedin.com/in/kamen-dimitrov-051b1495/'
    },
    {
      name: 'Angel Varbev',
      position: 'Founding Member',
      link: 'Someemail@abv.bg',
      imageLink: '../../assets/Varbev.jpg',
      linkedin: 'https://www.linkedin.com/in/angel-varbev-1236b8a9/'
    },
    {
      name: 'Sample Guy',
      position: 'Position',
      link: 'Somelink@abv.bg',
      imageLink: '../../assets/Shrek.jpg',
      linkedin: 'https://www.linkedin.com/in/kamen-dimitrov-051b1495/'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.listOfKeyEmployees = this.listOfKeyEmployees;
  }

}
