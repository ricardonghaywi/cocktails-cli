import axios from "axios";
import { displayDrink, displayDrinks } from "./models/drink.model";
import {
  displayIngredient,
  displayIngredients,
} from "./models/ingredient.model";

export class search {
  async searchcocktailbyname(searchTerm: string) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const drinks = response.data.drinks;

      if (drinks && drinks.length == 1) {
        displayDrink(drinks[0], true);
      } else if (drinks && drinks.length > 1) {
        console.log("\nWE FOUND  ", drinks.length, " RESULTS: ");
        displayDrinks(drinks, true);
      } else {
        console.log("no drinks found");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async searchingredientbyname(searchTerm: string) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`
      );
      const ingredients = response.data.ingredients;
      if (ingredients && ingredients.length == 1) {
        displayIngredient(ingredients[0]);
      } else if (ingredients && ingredients.length > 1) {
        console.log("\nWE FOUND  ", ingredients.length, " RESULTS: ");
        displayIngredients(ingredients);
      } else {
        console.log("no ingredient found");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async getCocktailsByfirstLetter(letter: string) {
    if (letter.length > 1 || letter == " ") {
      console.log(
        "\nyou should only enter one character in order to search!\n press 4 if you want to  retry !"
      );
      return;
    }

    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const drinks = response.data.drinks;

      if (drinks.length == 0) {
        console.log("no resulsts found");
      } else if (drinks.length == 1) {
        displayDrink(drinks[0], true);
      } else {
        console.log("\nWE FOUND  ", drinks.length, " RESULTS: ");
        displayDrinks(drinks, true);
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async getRandomCocktail() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const drinks = response.data.drinks;
      displayDrink(drinks[0], true);
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async searchCocktailByIngredient(ingredient: string) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const drinks = response.data.drinks;
      if (drinks && drinks.length == 1) {
        displayDrink(drinks[0], false);
      } else if (drinks && drinks.length > 1) {
        console.log("\nWE FOUND  ", drinks.length, " RESULTS: ");
        displayDrinks(drinks, false);
      } else {
        console.log("no drink that has the ingredient you entered");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }
}
