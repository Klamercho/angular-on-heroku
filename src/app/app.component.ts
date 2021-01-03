import { Component } from '@angular/core';
import { pageFade, spinnerLoader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    spinnerLoader,
    pageFade
  ]
})
export class AppComponent {
}
