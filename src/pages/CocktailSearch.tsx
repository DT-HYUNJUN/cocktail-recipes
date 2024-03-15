import { Box, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import {
  getByName,
  getIngredientByName,
} from "../features/cocktail/cocktailSlice"
import Menu from "../components/cocktailSearch/Menu"
import Cocktail from "../components/cocktailSearch/Cocktail"
import Ingredient from "../components/cocktailSearch/Ingredient"

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
        <Menu value={value} handleClickMenu={handleClickMenu} />
      </Box>
      {value === "cocktail" ? <Cocktail /> : <Ingredient />}
    </Container>
  )
}

export default CocktailSearch
