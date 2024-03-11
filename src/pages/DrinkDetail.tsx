import { Box, Container, Typography, styled } from "@mui/material"
import { useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import BackButton from "../components/BackButton"

const DrinkDetail = () => {
  const drink = useAppSelector((state: RootState) => state.selectedCocktail)

  return (
    drink && (
      <Container>
        <BackButton />
        <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
          <DrinkImage src={drink.strDrinkThumb} alt="" />
          <Typography variant="h5">{drink.strDrink}</Typography>
        </Box>
        <Box alignItems="start" mt={6}>
          <Typography
            borderBottom="1px solid black"
            fontFamily="NanumSquareNeoBold"
          >
            레시피
          </Typography>
          {}
        </Box>
        z
      </Container>
    )
  )
}

export default DrinkDetail

const DrinkImage = styled("img")({
  width: "240px",
  height: "240px",
  borderRadius: "10px",
  marginBottom: "30px",
})
