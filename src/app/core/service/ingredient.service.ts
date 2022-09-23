import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private IngApi = 'http://localhost:3000/ingredients'
  constructor(  private http: HttpClient) { }

  /*   getAll(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.PizzaApi)
  } */

  getAllIng(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.IngApi);
  }
}
