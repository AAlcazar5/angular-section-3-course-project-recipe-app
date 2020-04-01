import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F06%2F15%2F19%2F09%2Ffood-1459693_960_720.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffood-meat-recipe-power-pork-1459693%2F&tbnid=toZcQDRHGybEpM&vet=12ahUKEwiqyv2Ax77oAhUEa6wKHbRDAToQMygAegUIARCMAg..i&docid=w_4nPS_mVeWfwM&w=960&h=640&q=recipe&hl=en&ved=2ahUKEwiqyv2Ax77oAhUEa6wKHbRDAToQMygAegUIARCMAg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
