import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/JwtResponse';
import {SignInForm} from '../model/SignInForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API SERVER
private API_SIGNUP = 'https://testdeploybackendjava.herokuapp.com/signup';
private API_SIGNIN = 'https://testdeploybackendjava.herokuapp.com/signin';
  constructor(private http: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUpForm);
  }
  signIn(signInForm: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }
}
