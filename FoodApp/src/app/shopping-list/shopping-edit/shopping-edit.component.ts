import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const name=this.nameInput.nativeElement.value;
    const amount=this.amountInput.nativeElement.value
    const ingredient=new Ingredient(name,amount);
    this.shoppinglistService.addIngredient(ingredient);
  }
}
