import { Container } from "@mui/material"
import IngredList from "../components/MyBar/IngredList"
import { useAppDispatch } from "../app/hooks"
import {
  getByIngredient,
  setSelectedIngredient,
} from "../features/cocktail/cocktailSlice"
import { useNavigate } from "react-router-dom"
import { getIngredientByName } from "../features/cocktail/cocktailAPI"

const Ingredient = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleClickIngredient = async (strIngredient: string) => {
    dispatch(getByIngredient(strIngredient))
    const ingred = await getIngredientByName(strIngredient)
    dispatch(setSelectedIngredient(ingred))
    navigate(`/ingredient/${strIngredient}`)
  }

  return (
    <Container>
      <IngredList handleClickIngredient={handleClickIngredient} />
    </Container>
  )
}

export default Ingredient
