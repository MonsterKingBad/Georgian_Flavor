import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent {
  name = '';
  author = '';
  image = '';
  details = '';
  ingredients: string[] = [];
  recipeSteps: string[] = []; // Use 'recipeSteps' here
  uploadedImageUrl: string | null = null;

  constructor(private dishService: DishService, private router: Router) {}

  saveDish(): void {
    const finalImage = this.uploadedImageUrl || this.image;

    const newDish: Dish = {
      id: Date.now(),
      name: this.name,
      author: this.author,
      image: finalImage,
      details: this.details,
      ingredients: this.ingredients,
    };

    console.log('[AddDishComponent] Saving new dish:', newDish);
    this.dishService.addDish(newDish);
    this.router.navigate(['/recipes']);
  }

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
