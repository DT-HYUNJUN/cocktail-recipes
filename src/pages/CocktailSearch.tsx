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
import { useTranslation } from "react-i18next"
import ingreds from "../locales/ko/translation.json"

const engPattern = /[a-zA-Z]/

const CocktailSearch = () => {
  const [isClickedCocktail, setIsClickedCocktail] = useState(true)

  const handleClickCocktail = () => {
    setIsClickedCocktail(true)
  }
  const handleClickIngredient = () => {
    setIsClickedCocktail(false)
  }

  const { t } = useTranslation("translation", {
    keyPrefix: "ingredients",
  })

  const { name } = useParams() as { name: string }

  const dispatch = useAppDispatch()

  const checkName = (name: string) => {
    if (engPattern.test(name)) {
      return name
    } else {
      if (name in ingreds.ingredients["ko-names"]) {
        return t(`ko-names.${name}`)
      } else {
        return name
      }
    }
  }

  useEffect(() => {
    const searchName = checkName(name)
    dispatch(getByName(searchName))
    dispatch(getIngredientByName(searchName))
  }, [name])

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
