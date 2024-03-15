import type { IDrink } from "../../types"

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
