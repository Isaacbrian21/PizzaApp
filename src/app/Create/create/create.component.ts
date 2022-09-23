import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import { Pizza } from 'src/app/core/models/pizza.models';
import { IngredientService } from 'src/app/core/service/ingredient.service';
import { PizzaService } from 'src/app/core/service/pizza.service';
import { SpinnerService } from 'src/app/core/service/spinner.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
ingredients: Ingredient[] = []

pizza: Pizza[] = []
ingredientsNewPizza: Ingredient[] = []
url: string = "https://static-images.ifood.com.br/image/upload/t_medium/pratos/c0800686-1aed-4e9c-a394-ddf9ded177ed/202110182036_7U54_i.jpg"
pizzaName: string = ''
price: number = 29;



  constructor(private ingredientService: IngredientService, private spinnerService: SpinnerService, 
   private pizzaService: PizzaService ) { }

  ngOnInit(): void {
    this.getIng();
  }

  getIng(): void{
     this.ingredientService.getAllIng().subscribe((ingredients) =>{
      this.ingredients = ingredients
      console.log(ingredients);
      setTimeout(() =>{
        this.spinnerService.requestEnded();
      }, 3000)
      this.spinnerService.requestStarted();
      
     })
  }

  addPizza(){

  }

  addIng(ingredient: Ingredient): void{
    this.ingredientsNewPizza.push(ingredient);
    this.ingredients = this.ingredients.filter(e => e.id !== ingredient.id)
    console.log("Clicou no " + ingredient.name);
    
  }

  createPizza(): void{
    this.pizzaService.postOne({url: this.url, name: this.pizzaName , ingredients: this.ingredientsNewPizza, price: this.price}).subscribe()
    this.ingredientsNewPizza.forEach(e => {
      this.deleteIng(e)
    })
    this.pizzaName = ''
    window.scrollTo(0, 0)
  }

  deleteIng(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientsNewPizza = this.ingredientsNewPizza.filter(e => e.id !== ingredient.id);
  }
}
