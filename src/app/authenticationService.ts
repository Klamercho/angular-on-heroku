import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"
import { map } from 'rxjs/operators';
import * as moment from 'moment';


export interface LoginForm {
    email: String,
    password: String
}

export interface LoginForm {
    name: String,
    username: String,
    email: String,
    password: String,
    repassword: String
}

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(loginForm: LoginForm) {
        return this.http.post<any>('http://localhost:1234/user/login', { email: loginForm.email, password: loginForm.password }).pipe(
            map((token) => {
                console.log(token);
                this.setSession(token);
                // return token;

            })
        )
    }

    logout(): void {
        localStorage.removeItem('id_token');
        localStorage.removeItem('Expires_at');
    }

    register(registerForm: LoginForm) {
        return this.http.post<any>('http://localhost:1234/user/register', {
            userName: registerForm.username,
            password: registerForm.password,
            name: registerForm.name,
            email: registerForm.email,
            rePassword: registerForm.repassword
        }).pipe(
            map((message) => {
                console.log(message);
                // this.setSession(token);
                return message;
            })
        )
    }
    setSession(token) {
        localStorage.setItem('id_token', token.idToken);
        const expiresAt = moment().add(token.expiresIn, 'minutes')
        localStorage.setItem("Expires_at", JSON.stringify(expiresAt.valueOf()))
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration())
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('Expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
