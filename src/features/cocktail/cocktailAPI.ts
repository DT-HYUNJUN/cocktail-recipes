import type { IDrink } from "../../types"

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1"

export const getRandomDrink = async (): Promise<IDrink> => {
  const res = await fetch(`${baseUrl}/random.php`)
  const data = await res.json()
  return data.drinks[0]
}
