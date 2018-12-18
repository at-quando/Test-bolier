import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_BASE_URL } from '../../core/service/config/api.config';

const API_PATH = {
  team: 'fe.json',
  users: 'users'
}

export interface User {
  name: string;
  age: number;
}

export interface Team {
  name?: string;
  established?: string;
  manager?: string;
  members?: number;
}

@Injectable()
export class ServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTeam(): Observable<Team> {
    return this.httpClient.get(`${API_BASE_URL}/${API_PATH.team}`).pipe(
      map((d: any) => d || {})
    );
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post(`${API_BASE_URL}/${API_PATH.users}`, user).pipe(
      map((d: any) => d || {})
    );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get(`${API_BASE_URL}/${API_PATH.users}`).pipe(
      map((d: any) => d || {})
    );
  }
}
