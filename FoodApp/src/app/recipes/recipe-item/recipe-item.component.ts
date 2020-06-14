import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor( private recipeService:RecipeService) { }
  @Input() recipeItem:Recipe;

  ngOnInit(): void {
  }
  
  onItemSelection(recipe:Recipe){
  }

  selectedItemClick(){
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
