import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth/auth.service';
import { ApiService } from '../../core/service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  canAction: boolean;
  hasError: boolean;
  authenticator$: any;

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private router: Router
  ) {
    this.canAction = true;
  }

  ngOnInit() {}

  onSubmit(formData: any) {
    var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJEdW1teSB0b2tlbiIsImlhdCI6MTUwNzcwNTcwNCwiZXhwIjoxNTcwNzc3NzA0LCJhdWQiOiJhc2lhbnRlY2gudm4iLCJzdWIiOiJ0ZWFtLmZlQGFzaWFudGVjaC52biIsImF1dGhvciI6IkFUIEZyb250IEVuZCBUZWFtIiwiZW1haWwiOiJ0ZWFtLmZlQGFzaWFudGVjaC52biJ9.UsXvYEkACyavwqpsxjxKqb2FSAh4tfXoLDKrNIKG8J0';
    this.auth.login(access_token);
  }

}
