import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { setSelectedIngredient } from "../../features/cocktail/cocktailSlice"
import type { IIngredient } from "../../types"
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

interface Props {
  ingred: IIngredient
}

const IngredientCard = (props: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "ingredients",
  })

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleClickDrink = () => {
    dispatch(setSelectedIngredient(props.ingred))
    navigate(`/ingredient/${props.ingred.idIngredient}`)
  }

  return (
    <div onClick={handleClickDrink}>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="200"
            image={`https://www.thecocktaildb.com/images/ingredients/${props.ingred.strIngredient}.png`}
            alt="preview"
          />
        </CardActionArea>
      </Card>
      <Typography
        fontFamily="NanumSquareNeoBold"
        gutterBottom
        variant="subtitle1"
      >
        {t(`names.${props.ingred.strIngredient.toLowerCase()}`)}
      </Typography>
    </div>
  )
}

export default IngredientCard
