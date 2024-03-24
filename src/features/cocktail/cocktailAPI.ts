import type { IDrink, IIngredient } from "../../types"

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1"

export const getById = async (idDrink: string): Promise<IDrink> => {
  try {
    const res = await fetch(`${baseUrl}/lookup.php?i=${idDrink}`)
    const data = await res.json()
    return data.drinks[0]
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getIngredientByName = async (
  strIngredient: string,
): Promise<IIngredient> => {
  try {
    const res = await fetch(`${baseUrl}/search.php?i=${strIngredient}`)
    const data = await res.json()
    return data.ingredients[0]
  } catch (error) {
    console.log(error)
    throw error
  }
}
