import axios from "axios";
import { displayDrink } from "./models/drink.model";
import { displayIngredient } from "./models/ingredient.model";
require('dotenv').config();

const API = process.env.API_KEY;

export class ItemDetails {
  async GetCocktailById(id: string) {
    try {
      const response = await axios.get(
        //`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        API+'lookup.php?i='+id
      );
      const drink = response.data.drinks;
      if (drink == null) {
        console.log(
          " \n no cocktail with entered id, enter a valid one \n\n\n"
        );
      } else {
        displayDrink(drink[0], true);
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async GetIngredientById(id: string) {
    try {
      const response = await axios.get(
       // `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`
       API+'lookup.php?iid='+id
      );
      const ingredient = response.data.ingredients;
      if (response.data.ingredients == null) {
        console.log(
          " \n no ingredient with the entered id, enter a valid one\n\n\n"
        );
      } else {
        displayIngredient(ingredient[0]);
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }
}


