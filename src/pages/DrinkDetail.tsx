import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  styled,
} from "@mui/material"
import { useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import BackButton from "../components/BackButton"
import { useEffect } from "react"

const DrinkDetail = () => {
  const drink = useAppSelector((state: RootState) => state.selectedCocktail)

  useEffect(() => {
    console.log(drink)
  }, [drink])

  return (
    drink && (
      <Container>
        <BackButton />
        <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
          <DrinkImage src={drink.strDrinkThumb} />
          <Box display="flex" gap={1} mb={2}>
            <Button variant="contained" size="small">
              <Typography variant="caption">#{drink.strAlcoholic}</Typography>
            </Button>
            <Button variant="contained" size="small">
              <Typography variant="caption">#{drink.strGlass}</Typography>
            </Button>
          </Box>
          <Typography fontFamily="NanumSquareNeoHeavy" variant="h4">
            {drink.strDrink}
          </Typography>
        </Box>
        {/* 재료 */}
        <Box alignItems="start" mt={6}>
          <Typography fontFamily="NanumSquareNeoHeavy">재료</Typography>
          <Paper elevation={1}>
            <Box display="flex" justifyContent="space-between" p={4} mt={1}>
              <div>
                {drink.ingredients.map(
                  ingred =>
                    ingred.strIngredient && (
                      <Typography
                        fontFamily="NanumSquareNeoBold"
                        key={ingred.id}
                        mb={2}
                      >
                        {ingred.strIngredient}
                      </Typography>
                    ),
                )}
              </div>
              <div>
                {drink.measures.map(
                  measure =>
                    measure.strMeasure && (
                      <Typography
                        fontFamily="NanumSquareNeoBold"
                        textAlign="right"
                        key={measure.id}
                        mb={2}
                      >
                        {measure.strMeasure}
                      </Typography>
                    ),
                )}
              </div>
            </Box>
          </Paper>
        </Box>
        {/* 레시피 */}
        <Box mt={4}>
          <Typography fontFamily="NanumSquareNeoHeavy">레시피</Typography>
          <Paper elevation={1}>
            <Box p={4} mt={1}>
              {drink.strInstructions
                .split(/[.!]/)
                .slice(0, -1)
                .map((inst, index) => (
                  <Box display="flex" alignItems="start" gap={1} key={index}>
                    <Typography
                      fontFamily="NanumSquareNeoHeavy"
                      variant="subtitle2"
                    >
                      {index + 1}.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      {inst}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    )
  )
}

export default DrinkDetail

const DrinkImage = styled("img")({
  width: "240px",
  height: "240px",
  borderRadius: "10px",
  marginBottom: "10px",
})
