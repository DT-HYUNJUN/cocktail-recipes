import { useEffect } from "react"
import { Box, Container, Typography } from "@mui/material"
import RecipeCard from "../components/Common/CocktailCard"
import { getRandomCocktail } from "../features/cocktail/cocktailSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import LoadingCard from "../components/Common/LoadingCard"
import BaseIngredient from "../components/Cocktail/BaseIngredient"
import HeadText from "../components/Common/HeadText"

const Home = () => {
  const dispatch = useAppDispatch()

  const randomDrink = useAppSelector((state: RootState) => state.randomCocktail)

  const loading = useAppSelector((state: RootState) => state.loading)

  useEffect(() => {
    dispatch(getRandomCocktail())
  }, [])

  return (
    <Container>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <HeadText variant={"h5"} text={"랜덤 칵테일"} gutterBottom={true} />
        {loading ? <LoadingCard /> : <RecipeCard drink={randomDrink} />}
        <BaseIngredient />
      </Box>
    </Container>
  )
}

export default Home
