import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authenticationService';


@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private auth: AuthenticationService) { }
  errorMessage = '';
  currentCareer;
  isLogged: Boolean;
  hasCareer = false;

  

  ngOnInit(): void {
    this.isLogged = this.auth.isLoggedIn();
    this.checkForCareer();
    console.log(this.isLogged);
    const id = this.route.snapshot.paramMap.get('id');
    this.getSpecificCareer(id).subscribe({
      next: (data) => {
        this.currentCareer = data;
      },
      error: (err) => {
        this.errorMessage = 'ERROR!'
      }
    })
  }

  logOut(): void {
    this.auth.logout();
    this.isLogged = false;
  }
  redirectToLogin():void{
    this.router.navigate(['/login'])
  }

  checkForCareer(): void {
    const careerId = this.route.snapshot.paramMap.get('id');
    const token = localStorage.getItem('id_token');
    this.checkCareer(careerId,token).subscribe({
      next: (data) => {
        console.log(data);
        this.hasCareer = data.hasCareer;
      },
      error: (error) => {
        console.log(error);
      }

    })
    
  }

  checkCareer(careerId: String, token: String): Observable<any> {
    return this.http.post('http://localhost:1234/careers/checkcareer',{careerId: careerId, token: token})
  }
  addCareer():void{
    const careerId = this.route.snapshot.paramMap.get('id');
    const token = localStorage.getItem('id_token');
    this.sendCareer(careerId, token).subscribe({
      next: (message) => {
        this.hasCareer = true;
      }
    })
  }
  sendCareer(careerId: String, token: String): Observable<any> {
      return this.http.post('http://localhost:1234/careers/addcareer',{careerId: careerId, token: token})
  }
  getSpecificCareer(id: String): Observable<any> {
    return this.http.get(`http://localhost:1234/careers/find/${id}`)
  }
}
