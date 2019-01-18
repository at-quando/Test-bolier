import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  canAction: boolean;
  hasError: boolean;
  authenticator$: any;

  constructor(
    private auth: AuthService
  ) {
    this.canAction = true;
  }

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.auth.login(f.value)
      .subscribe(() => {
        // success
      })
  }

}
