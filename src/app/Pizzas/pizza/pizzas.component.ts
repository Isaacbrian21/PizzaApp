import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/core/models/pizza.models';
import { PizzaService } from 'src/app/core/service/pizza.service';
import { SpinnerService } from 'src/app/core/service/spinner.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
pizzas: Pizza[] = []

  constructor(private pizzaService: PizzaService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    
    this.getAll();
    
  }
  
  
  
  getAll(): void {
    this.pizzaService.getAll().subscribe((pizzas) => {
      this.pizzas = pizzas;
      console.log(pizzas);
      setTimeout(() =>{
        this.spinnerService.requestEnded();
      }, 3000)
      this.spinnerService.requestStarted();
    });
  }

}