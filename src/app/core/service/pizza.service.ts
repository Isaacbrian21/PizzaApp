import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza.models';



@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private PizzaApi = 'http://localhost:3000'
 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>( `${this.PizzaApi}/pizza`)
      
    
  }
postOne(pizza: Pizza): Observable<Pizza> {
  return this.http.post<Pizza>(`${this.PizzaApi}/pizza`, pizza)
}
}
