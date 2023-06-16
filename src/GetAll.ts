import axios from "axios";

export class GetAll {
  async getAllCategories() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log("all categories : \n");
      for (const category of response.data.drinks) {
        console.log(category.strCategory);
        console.log("-----------");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async getAllGlasses() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
      );
      console.log("all glasses : \n");
      for (const glass of response.data.drinks) {
        console.log(glass.strGlass);
        console.log("-----------");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async getAllIngredients() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
      );
      console.log("all Ingredients : \n");
      for (const ingredient of response.data.drinks) {
        console.log(ingredient.strIngredient1);
        console.log("-----------");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async getAllalcoholicFilters() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`
      );
      console.log("all types of drinks : \n");
      for (const drinktype of response.data.drinks) {
        console.log(drinktype.strAlcoholic);
        console.log("-----------");
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }
}

