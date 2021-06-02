import { Component, OnInit } from '@angular/core';
import {SignInForm} from '../../model/SignInForm';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
hide = true;
form: any = {};
signInForm: SignInForm;
  status = '';
  isLoginFailed = false;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  }
  ngSubmit(){
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    console.log('this.signInForm', this.signInForm)
    this.authService.signIn(this.signInForm).subscribe(data =>{
      console.log('data.token', data.token)
        this.tokenService.setTokenKey(data.token);
        this.tokenService.setNameKey(data.name);
        this.tokenService.setRoleKey(data.roles);
        this.router.navigate(['user-account']).then(()=>{
          window.location.reload()
        })
    }, error => {
      this.isLoginFailed = true;
      this.status = 'Login Failed please check your username or password!'
    })
  }
}
