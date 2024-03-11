import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import { setSelectedCockatil } from "../features/cocktail/cocktailSlice"

const RecipeCard = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const drink = useAppSelector((state: RootState) => state.randomCocktail)

  const handleClickDrink = () => {
    dispatch(setSelectedCockatil(drink))
    navigate(`/drink/${drink.idDrink}`)
  }

  return (
    <div onClick={handleClickDrink}>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={drink.strDrinkThumb}
            alt="preview"
          />
        </CardActionArea>
      </Card>
      <Typography gutterBottom variant="subtitle1" component="p">
        {drink.strDrink}
      </Typography>
    </div>
  )
}

export default RecipeCard
