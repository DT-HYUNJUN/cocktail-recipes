import {
  Box,
  CardActionArea,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material"
import Rum from "../../assets/images/rum.png"
import Gin from "../../assets/images/gin.png"
import Vodka from "../../assets/images/vodka.png"
import Whiskey from "../../assets/images/whiskey.png"
import Tequila from "../../assets/images/tequila.png"
import Brandy from "../../assets/images/brandy.png"
import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "../../app/hooks"

import HeadText from "../global/HeadText"
import { getByIngredient } from "../../features/cocktail/cocktailSlice"

export const baseIngredientList = [
  { id: 0, value: "Rum", ingredient: "럼", image: Rum },
  { id: 1, value: "Gin", ingredient: "진", image: Gin },
  { id: 2, value: "Vodka", ingredient: "보드카", image: Vodka },
  { id: 3, value: "Scotch", ingredient: "위스키", image: Whiskey },
  { id: 4, value: "Tequila", ingredient: "데킬라", image: Tequila },
  { id: 5, value: "Brandy", ingredient: "브랜디", image: Brandy },
]

const BaseIngredient = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClickBaseIngred = (value: string) => {
    dispatch(getByIngredient({ ingred: value, startNum: 0 }))
    navigate(`/${value}`)
  }

  return (
    <Box sx={{ flexGrow: 1, width: 345 }} mt={4}>
      <HeadText text={"베이스 스피릿"} />
      <Grid container spacing={2}>
        {baseIngredientList.map(ingred => (
          <Grid
            onClick={() => handleClickBaseIngred(ingred.value)}
            width="120px"
            key={ingred.id}
            item
            xs={6}
          >
            <CardActionArea>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center">
                  <IngredImage src={ingred.image} alt="ingred" />
                  <Typography
                    fontFamily="NanumSquareNeoBold"
                    textAlign="center"
                    flexGrow={1}
                  >
                    {ingred.ingredient}
                  </Typography>
                </Box>
              </Paper>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BaseIngredient

const IngredImage = styled("img")({
  width: "40px",
})
