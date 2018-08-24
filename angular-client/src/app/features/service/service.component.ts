import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, I18nService } from '../../core/service/index';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

  isInit: boolean;
  profile: any;
  team: any;
  name: string;
  age: number;
  user: any;
  users: any;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private i18n: I18nService
  ) {
    this.isInit = true;
  }

  ngOnInit() {
    this.isInit = false;
    this.getUsers();
  }

  getProfile() {
    this.profile = this.auth.getUserInfo();
  }

  clearProfile() {
    this.profile = null;
  }

  switchLang(lang: string) {
    this.i18n.switchLang(lang);
  }

  getTeam() {
    this.api.get(['fe.json']).subscribe(
      (data: any) => {
        this.team = data || {};
      }, (err: any) => {
        //
      }, () => {
        //
      }
    );
  }

  addUser() {
    this.users.push({name: this.name, age: this.age});
    this.api.post('users',{name: this.name, age: this.age}).subscribe(
      (data: any) => {
        this.user = data || {};
        console.log('OK',this.user);
      }, (err: any) => {
        //
      }, () => {
        //
      }
    );
  }

  getUsers() {
    this.api.get('users').subscribe(
      (data: any) => {
        this.users = data || {};
        console.log(this.users);
      }, (err: any) => {
        //
      }, () => {
        //
      }
    );
  }

  closeTeamDetail() {
    this.team = null;
  }

}
