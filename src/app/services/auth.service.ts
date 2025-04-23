import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null;

  constructor() {}

  // Check if running in the browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  login(role: 'admin' | 'user') {
    this.user = { role };
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  logout() {
    this.user = null;
    if (this.isBrowser()) {
      localStorage.removeItem('user');
    }
  }

  getUser() {
    if (!this.user) {
      if (this.isBrowser()) {
        this.user = JSON.parse(localStorage.getItem('user') || 'null');
      }
    }
    return this.user;
  }

  isAdmin(): boolean {
    return this.getUser()?.role === 'admin';
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}
