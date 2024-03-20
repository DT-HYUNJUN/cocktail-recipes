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
import { useEffect } from "react"
import HeadText from "../components/Common/HeadText"
import { useTranslation } from "react-i18next"

const CocktailDetail = () => {
  const drink = useAppSelector((state: RootState) => state.selectedCocktail)

  const { t } = useTranslation("translation", {
    keyPrefix: "cocktails",
  })

  useEffect(() => {
    console.log(drink)
  }, [drink])

  return (
    drink && (
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <DrinkImage src={drink.strDrinkThumb} />
          <Box display="flex" gap={1} mb={2}>
            <Button
              sx={{ borderRadius: "5px" }}
              variant="contained"
              size="small"
            >
              <Typography sx={{ color: "white" }} variant="caption">
                #{drink.strAlcoholic}
              </Typography>
            </Button>
            <Button
              sx={{ borderRadius: "5px" }}
              variant="contained"
              size="small"
            >
              <Typography sx={{ color: "white" }} variant="caption">
                #{drink.strGlass}
              </Typography>
            </Button>
          </Box>
          <Typography fontFamily="NanumSquareNeoHeavy" variant="h4">
            {t(drink.strDrink)}
          </Typography>
        </Box>
        {/* 재료 */}
        <Box alignItems="start" mt={3}>
          <HeadText text={"재료"} />
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
                          {/* {t(ingred.strIngredient)} */}
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
          <HeadText text={"레시피"} />
          <Paper elevation={3}>
            <Box p={2} pt={4} pb={4} mt={1}>
              {drink.strInstructions ? (
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
