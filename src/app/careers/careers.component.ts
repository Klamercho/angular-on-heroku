import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  errorMessage = '';
  allCareers;
  constructor(private http: HttpClient, private router: Router) {
   }
  ngOnInit(): void {
    this.getAllCareers().subscribe({
      next: (data) => {
        console.log(data);
        this.allCareers = data;
      },
      error: (err) => {
        this.errorMessage = 'ERROR!'
      }
    });
  }
    
  getAllCareers(): Observable<any> {
    return this.http.get('http://localhost:1234/careers/all')
  }

  sendData(data:any): Observable<any> {
    return this.http.post('http://localhost:1234/careers/filter',data);
  }
  searchHandler(formValue: { keyword: String, location: String }): void {
    console.log(formValue);
    this.errorMessage = '';
    this.sendData(formValue).subscribe({
      next: (data) => {
        console.log(data);
        this.allCareers = data;
      },
      error: (err) => {
        this.errorMessage = 'ERROR!';
      }
    })
  }
}
