import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
    if (this.email === 'admin@example.com' && this.password === 'admin123') {
      console.log('Logging in as admin');
      this.authService.login('admin');
      this.router.navigate(['/admin']);
    } else if (this.email === 'user@example.com' && this.password === 'user123') {
      console.log('Logging in as user');
      this.authService.login('user');
      this.router.navigate(['/home']);
    } else {
      console.log('Login failed');
      this.loginError = true;
    }
  }
  
  
}
