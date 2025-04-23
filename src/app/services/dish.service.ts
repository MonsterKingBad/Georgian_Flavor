import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  private dishes: Dish[] = []; // Store dishes

  constructor() {
    // Initialize with some default dishes or load from localStorage
    const storedDishes = localStorage.getItem('dishes');
    if (storedDishes) {
      this.dishes = JSON.parse(storedDishes);
    }
  }

  getDishes(): Dish[] {
    return this.dishes;
  }

  getDishById(id: number): Dish | undefined {
    return this.dishes.find(dish => dish.id === id);
  }

  addDish(dish: Dish): void {
    this.dishes.push(dish);
    this.saveDishes();
  }

  updateDish(updatedDish: Dish): void {
    const index = this.dishes.findIndex(dish => dish.id === updatedDish.id);
    if (index !== -1) {
      this.dishes[index] = updatedDish;
      this.saveDishes();
    }
  }

  deleteDish(id: number): void {
    this.dishes = this.dishes.filter(dish => dish.id !== id);
    this.saveDishes();
  }

  private saveDishes(): void {
    localStorage.setItem('dishes', JSON.stringify(this.dishes));
  }
}
