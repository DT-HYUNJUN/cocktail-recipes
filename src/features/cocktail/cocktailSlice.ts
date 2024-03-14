import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { IDrink, IDrinkAPI, IIngredient } from "../../types"

const initialCocktail: IDrink = {
  idDrink: "",
  strDrink: "",
  strCategory: "",
  strAlcoholic: "",
  strGlass: "",
  strInstructions: "",
  strDrinkThumb: "",
  ingredients: [
    { id: 1, strIngredient: "" },
    { id: 2, strIngredient: "" },
    { id: 3, strIngredient: "" },
    { id: 4, strIngredient: "" },
    { id: 5, strIngredient: "" },
    { id: 6, strIngredient: "" },
    { id: 7, strIngredient: "" },
    { id: 8, strIngredient: "" },
    { id: 9, strIngredient: "" },
    { id: 10, strIngredient: "" },
    { id: 11, strIngredient: "" },
    { id: 12, strIngredient: "" },
    { id: 13, strIngredient: "" },
    { id: 14, strIngredient: "" },
    { id: 15, strIngredient: "" },
  ],
  measures: [
    { id: 1, strMeasure: "" },
    { id: 2, strMeasure: "" },
    { id: 3, strMeasure: "" },
    { id: 4, strMeasure: "" },
    { id: 5, strMeasure: "" },
    { id: 6, strMeasure: "" },
    { id: 7, strMeasure: "" },
    { id: 8, strMeasure: "" },
    { id: 9, strMeasure: "" },
    { id: 10, strMeasure: "" },
    { id: 11, strMeasure: "" },
    { id: 12, strMeasure: "" },
    { id: 13, strMeasure: "" },
    { id: 14, strMeasure: "" },
    { id: 15, strMeasure: "" },
  ],
}

export interface CocktailSliceState {
  selectedCocktail: IDrink
  randomCocktail: IDrink
  cocktailList: IDrink[]
  ingredientList: IIngredient[]
}

const initialState: CocktailSliceState = {
  selectedCocktail: initialCocktail,
  randomCocktail: initialCocktail,
  cocktailList: [],
  ingredientList: [],
}

export const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setSelectedCockatil(state, action) {
      state.selectedCocktail.idDrink = action.payload.idDrink
      state.selectedCocktail.strDrink = action.payload.strDrink
      state.selectedCocktail.strCategory = action.payload.strCategory
      state.selectedCocktail.strAlcoholic = action.payload.strAlcoholic
      state.selectedCocktail.strGlass = action.payload.strGlass
      state.selectedCocktail.strInstructions = action.payload.strInstructions
      state.selectedCocktail.strDrinkThumb = action.payload.strDrinkThumb
      for (let i = 1; i <= 15; i++) {
        const ingredKey = `strIngredient${i}`
        const ingredValue = action.payload[ingredKey]
        if (ingredValue) {
          state.selectedCocktail.ingredients[i - 1].strIngredient = ingredValue
        }
      }
      for (let i = 1; i <= 15; i++) {
        const measureKey = `strMeasure${i}`
        const measureValue = action.payload[measureKey]
        if (measureValue) {
          state.selectedCocktail.measures[i - 1].strMeasure = measureValue
        }
      }
    },
    setRandomCocktail(state, action: PayloadAction<IDrinkAPI>) {
      state.randomCocktail.idDrink = action.payload.idDrink
      state.randomCocktail.strDrink = action.payload.strDrink
      state.randomCocktail.strCategory = action.payload.strCategory
      state.randomCocktail.strAlcoholic = action.payload.strAlcoholic
      state.randomCocktail.strGlass = action.payload.strGlass
      state.randomCocktail.strInstructions = action.payload.strInstructions
      state.randomCocktail.strDrinkThumb = action.payload.strDrinkThumb
      for (let i = 1; i <= 15; i++) {
        const ingredKey = `strIngredient${i}`
        const ingredValue = action.payload[ingredKey]
        if (ingredValue) {
          state.selectedCocktail.ingredients[i - 1].strIngredient = ingredValue
        }
      }
      for (let i = 1; i <= 15; i++) {
        const measureKey = `strMeasure${i}`
        const measureValue = action.payload[measureKey]
        if (measureValue) {
          state.selectedCocktail.measures[i - 1].strMeasure = measureValue
        }
      }
    },
    setCocktailList(state, action: PayloadAction<IDrinkAPI[]>) {
      let id = 0
      action.payload.forEach(drink => {
        const temp = {
          idDrink: drink.idDrink,
          strDrink: drink.strDrink,
          strCategory: drink.strCategory,
          strAlcoholic: drink.strAlcoholic,
          strGlass: drink.strGlass,
          strInstructions: drink.strInstructions,
          strDrinkThumb: drink.strDrinkThumb,
          ingredients: [{ id: 0, strIngredient: "" }],
          measures: [{ id: 0, strMeasure: "" }],
        }
        for (let i = 1; i <= 15; i++) {
          const ingredKey = `strIngredient${i}`
          const ingredValue = drink[ingredKey]
          if (ingredValue) {
            temp.ingredients.push({ id: i - 1, strIngredient: ingredValue })
          }
        }
        for (let i = 1; i <= 15; i++) {
          const measureKey = `strMeasure${i}`
          const measureValue = drink[measureKey]
          if (measureValue) {
            temp.measures.push({ id: i - 1, strMeasure: measureValue })
          }
        }
        state.cocktailList[id] = temp
        id += 1
      })
    },
    setIngredientsList(state, action: PayloadAction<IIngredient[]>) {
      state.ingredientList = action.payload
    },
  },
})

export const {
  setSelectedCockatil,
  setRandomCocktail,
  setCocktailList,
  setIngredientsList,
} = cocktailSlice.actions

export default cocktailSlice.reducer
