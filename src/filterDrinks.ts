import axios from "axios";

export class filterDrinks {
  async ByType(drinktype: string) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${drinktype}`
      );
      if (response.data.length == 0) {
        console.log(
          "\ninvalid type, press 8 to retry, or press 14 to check all available types\n"
        );
      } else {
        let total: number = 0;
        console.log("all drinks of type: ", drinktype, "\n");
        for (const drink of response.data.drinks) {
          console.log("drink ID: ", drink.idDrink);
          console.log("drink name: ", drink.strDrink);
          console.log("image url: ", drink.strDrinkThumb);
          console.log("-----------\n");
          total++;
        }

        if (total == 1) {
          console.log("we found one matching result");
        } else if (total > 1) {
          console.log("we found", total, "matching results");
        }
      }
    } catch (error: any) {
      console.error("Error making API call:", error.message);
    }
  }

  async ByCategory(category: string) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response.data.length == 0) {
        console.log(
          "\ninvalid category, press 9 to retry, or press 11 to check all available categories\n"
        );
      } else {
        let total: number = 0;
        console.log("all drinks of category: ", category, "\n");
        for (const drink of response.data.drinks) {
          console.log("drink ID: ", drink.idDrink);
          console.log("drink name: ", drink.strDrink);
          console.log("image url: ", drink.strDrinkThumb);
          console.log("-----------\n");
          total++;
        }

        if (total == 1) {
          console.log("we found one matching result");
        } else if (total > 1) {
          console.log("we found", total, "matching results");
        }
      }
    } catch (error: any) {
      console.error("Error making API call", error.message);
    }
  }

  async ByGlass(glass: string) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`
      );
      if (response.data.length == 0) {
        console.log(
          "\ninvalid glass name, press 10 to retry, or press 12 to check all available glasses\n"
        );
      } else {
        let total: number = 0;
        console.log("all drinks that can be poured in : ", glass, "\n");
        for (const drink of response.data.drinks) {
          console.log("drink ID: ", drink.idDrink);
          console.log("drink name: ", drink.strDrink);
          console.log("image url: ", drink.strDrinkThumb);
          console.log("-----------\n");
          total++;
        }
        if (total == 1) {
          console.log("we found one matching result");
        } else if (total > 1) {
          console.log("we found", total, "matching results");
        }
      }
    } catch (error: any) {
      console.error("Error making API call", error.message);
    }
  }
}
