import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { DishService }       from '../services/dish.service';
import { Dish }              from '../models/dish.model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css'],
})
export class DishDetailComponent implements OnInit {
  dish: Dish | undefined;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const all = this.dishService.getDishes();          // get the array
    this.dish = all.find(d => d.id === id);            // find your dish
  }
}
