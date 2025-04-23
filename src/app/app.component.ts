import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service'; // Inject AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Your App Title'; // Fix for title method (if needed)
  
  isRecipesPage: boolean = false;
  isContactPage: boolean = false;
  isAdminPage: boolean = false;
  isLoginPage: boolean = false;
  isAddDishPage: boolean = false;
  isEditDishPage: boolean = false;

  constructor(private router: Router, private authService: AuthService) {} // Inject AuthService

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update page conditions based on the current route
        this.isRecipesPage = this.router.url.includes('/recipes');
        this.isContactPage = this.router.url.includes('/contact');
        this.isAdminPage = this.router.url.includes('/admin');
        this.isLoginPage = this.router.url.includes('/login');
        this.isAddDishPage = this.router.url.includes('/add-dish');
        this.isEditDishPage = this.router.url.includes('/edit-dish');
      }
    });
  }
}
