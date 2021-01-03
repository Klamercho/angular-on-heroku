import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  listOfHeadderLinks = [
    ["services", "Services"],
    ["about", "About us"],
    ["clients", "Clients"],
    ["culture", "Culture"],
    ["careers", "Careers"],
    ["news", "News"],
    ["contacts", "Contacts"]
  ]

  ngOnInit(): void {
    this.listOfHeadderLinks = this.listOfHeadderLinks;
  }

}
