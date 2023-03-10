import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-2-735x490.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-2-735x490.jpg'
    ),
  ];

  onRecipeSelected(receivedSelectedRecipe: Recipe) {
    this.selectedRecipe.emit(receivedSelectedRecipe);
  }
}
