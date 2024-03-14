import type { IDrink, IDrinkAPI, IIngredient } from "../../types"

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1"

export const getRandomDrink = async (): Promise<IDrinkAPI> => {
  try {
    const res = await fetch(`${baseUrl}/random.php`)
    const data = await res.json()
    return data.drinks[0]
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getByIngredient = async (Ingred: string): Promise<IDrinkAPI[]> => {
  try {
    const res = await fetch(`${baseUrl}/filter.php?i=${Ingred}`)
    const data = await res.json()
    return data.drinks.slice(0, 10)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getCocktailByName = async (name: string): Promise<IDrinkAPI[]> => {
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
}

export const getIngredientByName = async (
  name: string,
): Promise<IIngredient[]> => {
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
}
