import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  errorMessage = '';
  allNews;
  ngOnInit(): void {
    this.getAllNews().subscribe({
      next: (data) => {
        console.log(data);
        this.allNews = data;
      },
      error: (err) => {
        this.errorMessage = 'ERROR!'
      }
    });

  }

  getAllNews(): Observable<any> {
    return this.http.get('http://localhost:1234/news/allnews')
  }
}
