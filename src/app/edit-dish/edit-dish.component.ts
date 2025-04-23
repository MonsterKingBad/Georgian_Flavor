import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  dish: Dish | undefined; // To hold the dish to be edited
  name = '';
  author = '';
  image = '';
  details = '';
  ingredients: string[] = [];
  recipeSteps: string[] = [];
  uploadedImageUrl: string | null = null;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the dish ID from the route params
    this.dish = this.dishService.getDishById(id); // Fetch the dish by ID
    if (this.dish) {
      this.name = this.dish.name;
      this.author = this.dish.author;
      this.image = this.dish.image;
      this.details = this.dish.details;
      this.ingredients = this.dish.ingredients;
      this.details = this.dish.details;
    }
  }

  saveDish(): void {
    if (this.dish) {
      this.dish.name = this.name;
      this.dish.author = this.author;
      this.dish.image = this.uploadedImageUrl || this.image;
      this.dish.details = this.details;
      this.dish.ingredients = this.ingredients;
      this.dish.details = this.details;

      this.dishService.updateDish(this.dish);
      this.router.navigate(['/recipes']);
    }
  }

  // Methods to handle ingredient and recipe step manipulation
  addIngredient(): void {
    this.ingredients.push('');
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }

  addRecipeStep(): void {
    this.recipeSteps.push('');
  }

  removeRecipeStep(index: number): void {
    this.recipeSteps.splice(index, 1);
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
