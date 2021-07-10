import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A First Recipe', 'This is a First Item', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'),
    new Recipe('A Second Recipe', 'This is a Second Item', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
