import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  getCocktailByName,
  getIngredientByName,
} from "../features/cocktail/cocktailAPI"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  setCocktailList,
  setIngredientsList,
} from "../features/cocktail/cocktailSlice"
import type { RootState } from "../app/store"
import BackButton from "../components/BackButton"
import Menu from "../components/CocktailSearch/Menu"
import CocktailCard from "../components/CocktailCard"
import All from "../components/CocktailSearch/All"
import Cocktail from "../components/CocktailSearch/Cocktail"
import Ingredient from "../components/CocktailSearch/Ingredient"

const CocktailSearch = () => {
  const [value, setValue] = useState("all")

  const handleClickMenu = (value: string) => {
    setValue(value)
  }

  const { name } = useParams()
  const dispatch = useAppDispatch()

  const drinkList = useAppSelector((state: RootState) => state.cocktailList)

  useEffect(() => {
    const fetchByName = async () => {
      const drinks = await getCocktailByName(name!)
      const ingredients = await getIngredientByName(name!)
      dispatch(setCocktailList(drinks))
      dispatch(setIngredientsList(ingredients))
    }
    fetchByName()
  }, [])

  return (
    <Container>
      <BackButton />
      <Box display="flex" justifyContent="center">
        <Menu value={value} handleClickMenu={handleClickMenu} />
      </Box>
      {(() => {
        switch (value) {
          case "all":
            return <All />
          case "cocktail":
            return <Cocktail />
          case "ingredient":
            return <Ingredient />
          default:
            return <div></div>
        }
      })()}
    </Container>
  )
}

export default CocktailSearch
