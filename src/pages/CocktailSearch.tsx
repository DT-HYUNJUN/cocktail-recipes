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
  const [value, setValue] = useState("cocktail")

  const handleClickMenu = (value: string) => {
    setValue(value)
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
          value={value}
          handleClickMenu={handleClickMenu}
          textOne={{ name: "cocktail", value: "칵테일" }}
          textTwo={{ name: "ingredient", value: "재료" }}
        />
      </Box>
      {value === "cocktail" ? <Cocktail /> : <Ingredient />}
    </Container>
  )
}

export default CocktailSearch
