import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login({ name, password }: any): Observable<any> {
    if (name === 'abhishek' && password === 'abc') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ email: 'admin@gmail.com' });
    }
    return throwError(() => new Error('Failed to login'));
  }
}
