const figlet = require("figlet");

import { search } from "./search";
import { ItemDetails } from "./ItemDetails";
import { filterDrinks } from "./filterDrinks";
import { GetAll } from "./GetAll";
import readline from "readline";

console.log(figlet.textSync("welcome to the cocktail system"));

const Search = new search();
const itemDetails = new ItemDetails();
const filterdrinks = new filterDrinks();
const Getall = new GetAll();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commands = [
  { number: "0", description: "press 0 to exit the program" },
  { number: "1", description: "search cocktail by name" },
  { number: "2", description: "search ingredient by name" },
  { number: "3", description: "search cocktail by ingredient" },
  { number: "4", description: "search cocktails by first letter" },
  { number: "5", description: "search for a random cocktail" },
  { number: "6", description: "search for  a cocktail by  ID" },
  { number: "7", description: "search for an ingredient by ID" },
  {
    number: "8",
    description: "filter cocktails by type (alcoholic/non-alcoholic)",
  },
  { number: "9", description: "filter cocktails by category" },
  { number: "10", description: "filter cocktails by glass used for it" },
  { number: "11", description: "list all categories" },
  { number: "12", description: "list all glasses" },
  { number: "13", description: "list all ingredients" },
  { number: "14", description: "list all types of drinks" },
];

const generatePromptMessage = () => {
  let promptMessage = "\nwhat would you like to do :\n\n";
  commands.forEach((command) => {
    promptMessage += `${command.number}: ${command.description}\n`;
  });
  return promptMessage;
};

const askUser = () => {
  rl.question(generatePromptMessage(), async (answer) => {
    const selectedCommand = commands.find(
      (command) => command.number === answer
    );
    if (selectedCommand) {
      switch (selectedCommand.number) {
        case "0":
          console.log("exiting...");
          rl.close();
          return;

        case "1":
          rl.question("Enter the cocktail name: \n", async (name) => {
            await Search.searchcocktailbyname(name);
            askUser();
          });
          break;

        case "2":
          rl.question("Enter ingredient name: \n", async (ingredient) => {
            await Search.searchingredientbyname(ingredient);
            askUser();
          });
          break;

        case "3":
          rl.question("Enter ingredient name: \n", async (ingredient) => {
            await Search.searchCocktailByIngredient(ingredient);
            askUser();
          });
          break;

        case "4":
          rl.question(
            "Enter first letter of cocktail name: \n",
            async (letter) => {
              await Search.getCocktailsByfirstLetter(letter);
              askUser();
            }
          );
          break;

        case "5":
          await Search.getRandomCocktail();
          askUser();
          break;

        case "6":
          rl.question(
            "Enter cocktail id to list its details: \n",
            async (id) => {
              await itemDetails.GetCocktailById(id);
              askUser();
            }
          );
          break;

        case "7":
          rl.question(
            "Enter ingredient id to list its details: \n",
            async (id) => {
              await itemDetails.GetIngredientById(id);
              askUser();
            }
          );
          break;

        case "8":
          rl.question(
            "Enter type (Alcoholic/Non alcoholic/Optional alcohol): \n",
            async (type) => {
              await filterdrinks.ByType(type);
              askUser();
            }
          );
          break;

        case "9":
          rl.question("Enter drink category: \n", async (category) => {
            await filterdrinks.ByCategory(category);
            askUser();
          });
          break;

        case "10":
          rl.question("Enter glass name: \n", async (glass) => {
            await filterdrinks.ByGlass(glass);
            askUser();
          });
          break;

        case "11":
          await Getall.getAllCategories();
          askUser();
          break;

        case "12":
          await Getall.getAllGlasses();
          askUser();
          break;

        case "13":
          await Getall.getAllIngredients();
          askUser();
          break;

        case "14":
          await Getall.getAllalcoholicFilters();
          askUser();
          break;

        default:
          console.log("Invalid command!");
          askUser();
          break;
      }
    } else {
      console.log("Invalid command!");
      askUser();
    }
  });
};

askUser();

// to use the cli
// npm start
