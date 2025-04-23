import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // ✅ Make sure the path is correct

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService) {} // ✅ Inject AuthService

  logout() {
    this.authService.logout(); // ✅ Ensure this method exists in AuthService
  }
}
