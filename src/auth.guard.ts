import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './app/services/auth.service'; // Make sure the import path is correct

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // If the user is not logged in, redirect them to the login page
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check if the user is an admin
    const isAdmin = this.authService.isAdmin();
    if (!isAdmin) {
      // If not an admin, redirect to the home page or another route
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
