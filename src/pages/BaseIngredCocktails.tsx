import CocktailCard from "../components/global/CocktailCard"
import { Box, Container, styled } from "@mui/material"
import { useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import { baseIngredientList } from "../components/home/BaseIngredient"
import { useParams } from "react-router-dom"

import HeadText from "../components/global/HeadText"
import { useEffect } from "react"
import LoadingCard from "../components/global/LoadingCard"

const BaseIngredCocktails = () => {
  const drinkList = useAppSelector((state: RootState) => state.cocktailList)
  const loading = useAppSelector((state: RootState) => state.loading)

  const { ingred } = useParams() as { ingred: string }

  const targetIngred = baseIngredientList.find(
    ingerd => ingerd.value === ingred,
  )!

  useEffect(() => {
    console.log(drinkList)
  }, [drinkList])

  return (
    drinkList && (
      <Container>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="end" pl={3} gap={2}>
            <IngredImage src={targetIngred.image} alt="ingred" />
            <HeadText text={`${targetIngred.ingredient} 베이스 칵테일`} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            {loading ? (
              <LoadingCard />
            ) : (
              drinkList.map(drink => (
                <CocktailCard key={drink.idDrink} drink={drink} />
              ))
            )}
          </Box>
        </Box>
      </Container>
    )
  )
}

export default BaseIngredCocktails

const IngredImage = styled("img")({
  width: "40px",
})
