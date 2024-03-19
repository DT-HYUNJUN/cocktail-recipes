import { Box, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import {
  getByName,
  getIngredientByName,
} from "../features/cocktail/cocktailSlice"
import Menu from "../components/Common/MenuBar"
import Cocktail from "../components/CocktailSearch/Cocktail"
import Ingredient from "../components/CocktailSearch/Ingredient"

const CocktailSearch = () => {
  const [isClickedCocktail, setIsClickedCocktail] = useState(true)

  const handleClickCocktail = () => {
    setIsClickedCocktail(true)
  }
  const handleClickIngredient = () => {
    setIsClickedCocktail(false)
  }

  const { name } = useParams() as { name: string }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getByName(name))
    dispatch(getIngredientByName(name))
  }, [])

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Menu
          value={isClickedCocktail}
          handleClickOne={handleClickCocktail}
          handleClickTwo={handleClickIngredient}
          text={{ one: "칵테일", two: "재료" }}
        />
      </Box>
      {isClickedCocktail ? <Cocktail /> : <Ingredient />}
    </Container>
  )
}

export default CocktailSearch
