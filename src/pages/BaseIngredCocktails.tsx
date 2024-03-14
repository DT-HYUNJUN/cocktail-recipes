import CocktailCard from "../components/CocktailCard"
import { Box, Container } from "@mui/material"
import { useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import BackButton from "../components/BackButton"

const BaseIngredCocktails = () => {
  const drinkList = useAppSelector((state: RootState) => state.cocktailList)

  return (
    drinkList && (
      <Container>
        <BackButton />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          pt={4}
        >
          {drinkList.map(drink => (
            <CocktailCard key={drink.idDrink} drink={drink} />
          ))}
        </Box>
      </Container>
    )
  )
}

export default BaseIngredCocktails
