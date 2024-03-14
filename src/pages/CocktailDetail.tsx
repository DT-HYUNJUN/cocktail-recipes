import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const CocktailDetail = () => {
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
          <Paper elevation={3}>
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              p={2}
              pt={4}
              pb={4}
              mt={1}
            >
              {drink.ingredients.map(
                (ingred, index) =>
                  ingred.strIngredient && (
                    <Box
                      key={ingred.id}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center">
                        <IngredImage
                          src={`https://www.thecocktaildb.com/images/ingredients/${ingred.strIngredient}-Small.png`}
                          alt=""
                        />
                        <Typography fontFamily="NanumSquareNeoBold">
                          {ingred.strIngredient}
                        </Typography>
                      </Box>
                      <Typography fontFamily="NanumSquareNeoBold">
                        {drink.measures[index].strMeasure}
                      </Typography>
                    </Box>
                  ),
              )}
            </Box>
          </Paper>
        </Box>
        {/* 레시피 */}
        <Box mt={4}>
          <Typography fontFamily="NanumSquareNeoHeavy">레시피</Typography>
          <Paper elevation={3}>
            <Box p={2} pt={4} pb={4} mt={1}>
              {drink.strInstructions.split(/[.!]/).slice(0, -1) ? (
                drink.strInstructions
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
                  ))
              ) : (
                <Box>
                  <Typography
                    fontFamily="NanumSquareNeoHeavy"
                    variant="subtitle2"
                  >
                    1.
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {drink.strInstructions}
                  </Typography>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      </Container>
    )
  )
}

export default CocktailDetail

const DrinkImage = styled("img")({
  width: "240px",
  height: "240px",
  borderRadius: "10px",
  marginBottom: "10px",
})

const IngredImage = styled("img")({
  width: "50px",
  height: "50px",
})
