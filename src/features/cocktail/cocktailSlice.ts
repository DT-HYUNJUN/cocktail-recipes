import type { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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

const initialIngredient: IIngredient = {
  idIngredient: "",
  strIngredient: "",
  strDescription: "",
  strType: "",
  strAlcohol: "",
  strABV: "",
}

export interface CocktailSliceState {
  selectedCocktail: IDrink
  randomCocktail: IDrink
  cocktailList: IDrink[]
  ingredientList: IIngredient[]
  selectedIngredient: IIngredient
  loading: boolean
}

const initialState: CocktailSliceState = {
  selectedCocktail: initialCocktail,
  randomCocktail: initialCocktail,
  cocktailList: [],
  ingredientList: [],
  selectedIngredient: initialIngredient,
  loading: false,
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
      state.loading = false
    },
    setSelectedIngredient(state, action: PayloadAction<IIngredient>) {
      state.selectedIngredient = action.payload
      state.loading = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRandomCocktail.pending, state => {
        state.loading = true
      })
      .addCase(
        getRandomCocktail.fulfilled,
        (state, action: PayloadAction<IDrinkAPI>) => {
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
              state.selectedCocktail.ingredients[i - 1].strIngredient =
                ingredValue
            }
          }
          for (let i = 1; i <= 15; i++) {
            const measureKey = `strMeasure${i}`
            const measureValue = action.payload[measureKey]
            if (measureValue) {
              state.selectedCocktail.measures[i - 1].strMeasure = measureValue
            }
          }
          state.loading = false
        },
      )
      .addCase(getByIngredient.pending, state => {
        state.loading = true
      })
      .addCase(
        getByIngredient.fulfilled,
        (state, action: PayloadAction<IDrinkAPI[]>) => {
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
          state.loading = false
        },
      )
      .addCase(getByName.pending, state => {
        state.loading = true
      })
      .addCase(
        getByName.fulfilled,
        (state, action: PayloadAction<IDrinkAPI[]>) => {
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
          state.loading = false
        },
      )
      .addCase(getIngredientByName.pending, state => {
        state.loading = true
      })
      .addCase(
        getIngredientByName.fulfilled,
        (state, action: PayloadAction<IIngredient[]>) => {
          state.ingredientList = action.payload
          state.loading = false
        },
      )
  },
})

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1"

// 랜덤 칵테일
export const getRandomCocktail = createAsyncThunk(
  "cocktail/getRandomCocktail",
  async () => {
    try {
      const res = await fetch(`${baseUrl}/random.php`)
      const data = await res.json()
      return data.drinks[0]
    } catch (error) {
      console.log(error)
      throw error
    }
  },
)

// id 검색
export const getById = createAsyncThunk(
  "cocktail/getById",
  async (idDrink: string) => {
    try {
      const res = await fetch(`${baseUrl}/lookup.php?i=${idDrink}`)
      const data = await res.json()
      return data.drinks[0]
    } catch (error) {
      console.log(error)
      throw error
    }
  },
)

// 재료로 검색
export const getByIngredient = createAsyncThunk(
  "cocktail/getByIngredient",
  async (ingred: string) => {
    try {
      const res = await fetch(`${baseUrl}/filter.php?i=${ingred}`)
      const data = await res.json()
      return data.drinks.slice(0, 10)
    } catch (error) {
      console.log(error)

      throw error
    }
  },
)

// 이름으로 칵테일 검색
export const getByName = createAsyncThunk(
  "cocktail/getByName",
  async (name: string) => {
    try {
      const res = await fetch(`${baseUrl}/search.php?s=${name}`)
      const data = await res.json()
      if (data.drinks) {
        return data.drinks.slice(0, 10)
      } else {
        return []
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  },
)

// 이름으로 재료 검색
export const getIngredientByName = createAsyncThunk(
  "cocktail/getIngredientByName",
  async (name: string) => {
    try {
      const res = await fetch(`${baseUrl}/search.php?i=${name}`)
      const data = await res.json()
      if (data.ingredients) {
        return data.ingredients
      } else {
        return []
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  },
)

export const { setSelectedCockatil, setSelectedIngredient } =
  cocktailSlice.actions

export default cocktailSlice.reducer
