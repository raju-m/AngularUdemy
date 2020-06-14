import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{


  constructor(private shoppinglistService:ShoppingListService){

  }
  recipeSelected=new EventEmitter<Recipe>();

  private  recipes:Recipe[]=[
        new Recipe('2-ingredient Pasta',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/97761.jpg',
        [
          new Ingredient('Meat',1),
          new Ingredient('Egg',10)
        ]),
        new Recipe('Steak and Avocado Salad',
        'Praesent vulputate, mauris a hendrerit mattis.',
        'https://img.buzzfeed.com/video-api-prod/assets/e12bcf15ea7a494d87462e6dd0b9caa6/BFV9723_SteakAvocadoSalad-ThumbB1080.jpg',
        [
          new Ingredient('Beef',3),
          new Ingredient('Avocado',2)
        ]),
        new Recipe('Baked Avocado Eggs',
        'Proin convallis, odio vel faucibus fringilla.',
        'https://img.buzzfeed.com/video-api-prod/assets/0ec8b1258cb846f4a8e16df0fe73978e/Thumb.jpg',
        [
          new Ingredient('Egg',4),
          new Ingredient('Bread',1),
          new Ingredient('Avocado',1)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
       this.shoppinglistService.addIngredients(ingredients);
      }
}