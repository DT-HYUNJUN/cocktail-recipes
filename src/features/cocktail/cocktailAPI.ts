import type { IDrink } from "../../types"

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1"

export const getRandomDrink = async (): Promise<IDrink> => {
  const res = await fetch(`${baseUrl}/random.php`)
  const data = await res.json()
  return data.drinks[0]
}

export const getByIngredient = async (Ingred: string): Promise<IDrink[]> => {
  const res = await fetch(`${baseUrl}/filter.php?i=${Ingred}`)
  const data = await res.json()
  return data.drinks.slice(0, 10)
}
