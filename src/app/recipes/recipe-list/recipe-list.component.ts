import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW__esGEwn6kZHgFk50I5ze-Vso6E40SxPARBgWFkcg7h1ION'),
    new Recipe('Second Test', 'Another simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW__esGEwn6kZHgFk50I5ze-Vso6E40SxPARBgWFkcg7h1ION')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
