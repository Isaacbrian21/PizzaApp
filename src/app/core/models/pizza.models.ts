import { Ingredient } from "./ingredient.model"

export interface Pizza{
    id?: Number
    url: string
    name: string
    price: Number
    ingredients: Ingredient[]
}