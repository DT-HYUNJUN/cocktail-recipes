import { createSlice } from "@reduxjs/toolkit"
import type { IDrink } from "../../types"

const initialCocktail = {
  strDrink: "",
  strDrinkThumb: "",
  idDrink: "",
}

export interface CocktailSliceState {
  selectedCocktail: IDrink
  randomCocktail: IDrink
}

const initialState: CocktailSliceState = {
  selectedCocktail: initialCocktail,
  randomCocktail: initialCocktail,
}

export const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setSelectedCockatil(state, action) {
      state.selectedCocktail = action.payload
    },
    setRandomCocktail(state, action) {
      state.randomCocktail = action.payload
    },
  },
})

export const { setSelectedCockatil, setRandomCocktail } = cocktailSlice.actions

export default cocktailSlice.reducer
