import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fade, fancything } from '../animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  animations: [
    fade,
    fancything
  ]
})
export class ClientsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  errorMessage = '';
  allClients;
  ngOnInit(): void {
    this.getAllClients().subscribe({
      next: (data) => {
        console.log(data);
        this.allClients = data;
      },
      error: (err) => {
        this.errorMessage = 'ERROR!'
      }
    });

  }

  getAllClients(): Observable<any> {
    return this.http.get('http://localhost:1234/clients/allclients')
  }
}
