import { useEffect } from "react"
import { Box, Container, Typography } from "@mui/material"
import RecipeCard from "../components/global/CocktailCard"
import { getRandomCocktail } from "../features/cocktail/cocktailSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import LoadingCard from "../components/global/LoadingCard"
import BaseIngredient from "../components/home/BaseIngredient"

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
        <Typography
          color="primary"
          fontFamily="NanumSquareNeoHeavy"
          variant="h5"
          gutterBottom
        >
          랜덤 칵테일
        </Typography>

        {loading ? <LoadingCard /> : <RecipeCard drink={randomDrink} />}

        <BaseIngredient />
      </Box>
    </Container>
  )
}

export default Home
