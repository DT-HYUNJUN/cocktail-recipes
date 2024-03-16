import CocktailCard from "../components/global/CocktailCard"
import { Box, Container, Typography, styled } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import { baseIngredientList } from "../components/home/BaseIngredient"
import { useParams } from "react-router-dom"
import HeadText from "../components/global/HeadText"
import { useEffect } from "react"
import LoadingCard from "../components/global/LoadingCard"
import { useInView } from "react-intersection-observer"
import { getByIngredient } from "../features/cocktail/cocktailSlice"

const BaseIngredCocktails = () => {
  const [ref, inView] = useInView()

  const { ingred } = useParams() as { ingred: string }

  const drinkList = useAppSelector((state: RootState) => state.cocktailList)
  const loading = useAppSelector((state: RootState) => state.loading)
  const count = useAppSelector((state: RootState) => state.count)
  const selectedBaseIngred = useAppSelector(
    (state: RootState) => state.selectedBaseIngred,
  )
  const isEnd = useAppSelector((state: RootState) => state.isEnd)

  const dispatch = useAppDispatch()

  const targetIngred = baseIngredientList.find(
    ingerd => ingerd.value === ingred,
  )!

  useEffect(() => {
    if (selectedBaseIngred !== ingred) {
      console.log("첫 로딩")
      dispatch(getByIngredient({ ingred, count: 0, reset: true }))
    }
  }, [])

  useEffect(() => {
    if (count !== 0 && !isEnd && inView) {
      console.log(`inView checked, count: ${count}`)
      dispatch(getByIngredient({ ingred, count, reset: false }))
    }
  }, [inView])

  return (
    drinkList && (
      <Container>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" pl={3} gap={2}>
            <IngredImage src={targetIngred.image} alt="ingred" />
            <HeadText
              variant="h6"
              text={`${targetIngred.ingredient} 베이스 칵테일`}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={6}
          >
            {loading
              ? [0, 1, 3].map(item => (
                  <div key={item}>
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                  </div>
                ))
              : drinkList.map(drink => (
                  <CocktailCard key={drink.idDrink} drink={drink} />
                ))}
            {isEnd && <HeadText text="끝" variant="h4" />}
          </Box>
        </Box>
        <div ref={ref} />
      </Container>
    )
  )
}

export default BaseIngredCocktails

const IngredImage = styled("img")({
  width: "40px",
})
