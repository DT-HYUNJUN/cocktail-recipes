import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { setSelectedCockatil } from "../features/cocktail/cocktailSlice"
import type { IDrink } from "../types"

interface Props {
  drink: IDrink
}

const CocktailCard = (props: Props) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleClickDrink = () => {
    dispatch(setSelectedCockatil(props.drink))
    navigate(`/drink/${props.drink.idDrink}`)
  }

  return (
    <div onClick={handleClickDrink}>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.drink.strDrinkThumb}
            alt="preview"
          />
        </CardActionArea>
      </Card>
      <Typography
        fontFamily="NanumSquareNeoBold"
        gutterBottom
        variant="subtitle1"
      >
        {props.drink.strDrink}
      </Typography>
    </div>
  )
}

export default CocktailCard
