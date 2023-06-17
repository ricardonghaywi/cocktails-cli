interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
  strAlcohol: string;
  strABV: string | null;
}

export function displayIngredient(ingredient: Ingredient) {
  console.log("Ingredient ID:", ingredient.idIngredient);
  console.log("Ingredient Name:", ingredient.strIngredient);
  if (ingredient.strDescription != null) {
    console.log("Description:", ingredient.strDescription);
  }
  if (ingredient.strType != null) {
    console.log("Type:", ingredient.strType);
  }
  console.log("Alcohol:", ingredient.strAlcohol);
  if (ingredient.strABV != null) {
    console.log("ABV :", ingredient.strABV);
  }
  console.log("-----------------------");
}

export function displayIngredients(ingredients: Ingredient[]) {
  //ingredients.forEach((ingredient, index) => {
  //console.log(`Ingredient ${index + 1}:`);
  //displayIngredient(ingredient);
  //console.log("------------------");
  //console.log("\n");
  //});
  let index: number = 1;

  for (const ingredient of ingredients) {
    console.log("Ingredient", index, ":");
    displayIngredient(ingredient);
    console.log("------------------");
    console.log("\n");
    index++;
  }
}
