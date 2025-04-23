import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../models/dish.model';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dishes: Dish[] = []; // Array to hold the dishes

  constructor(private dishService: DishService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loadDishes(); // Load dishes when the component is initialized
  }

  // Load dishes from DishService (localStorage)
  loadDishes(): void {
    this.dishes = this.dishService.getDishes();
  }

  // This method is triggered by the delete button
  onDeleteDish(id: number): void {
    this.dishService.deleteDish(id);  // Call the delete method in DishService
    this.loadDishes();  // Reload the dishes after deletion
  }

  // Method for adding a new dish (you can expand this later)
  onAddDish(): void {
    this.router.navigate(['/add-dish']); // Navigate to the AddDishComponent
  }

  // Method for editing a dish
  onEditDish(id: number): void {
    this.router.navigate(['/edit-dish', id]); // Navigate to EditDishComponent with the dish id
  }
}
