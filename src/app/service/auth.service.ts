import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API SERVER
private API_SIGNUP = 'https://testdeploybackendjava.herokuapp.com/signup';
  constructor(private http: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUpForm);
  }
}
