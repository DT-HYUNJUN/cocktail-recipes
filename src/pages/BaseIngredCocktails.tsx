import CocktailCard from "../components/global/CocktailCard"
import { Box, Container, styled } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import { baseIngredientList } from "../components/home/BaseIngredient"
import { useParams } from "react-router-dom"
import HeadText from "../components/global/HeadText"
import { useEffect, useRef } from "react"
import LoadingCard from "../components/global/LoadingCard"
import { useInView } from "react-intersection-observer"
import { getByIngredient } from "../features/cocktail/cocktailSlice"

const BaseIngredCocktails = () => {
  const [ref, inView] = useInView()

  const drinkList = useAppSelector((state: RootState) => state.cocktailList)
  const loading = useAppSelector((state: RootState) => state.loading)

  const { ingred } = useParams() as { ingred: string }

  const dispatch = useAppDispatch()

  const startNumRef = useRef(10)

  const targetIngred = baseIngredientList.find(
    ingerd => ingerd.value === ingred,
  )!

  useEffect(() => {
    if (inView) {
      console.log(`inView checked, startNum: ${startNumRef.current}`)
      dispatch(getByIngredient({ ingred, startNum: startNumRef.current }))
      startNumRef.current += 10
    }
  }, [inView])

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
