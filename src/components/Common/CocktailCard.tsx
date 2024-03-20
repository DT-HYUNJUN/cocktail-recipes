import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { setSelectedCockatil } from "../../features/cocktail/cocktailSlice"
import type { IDrink } from "../../types"
import { getById } from "../../features/cocktail/cocktailAPI"
import { useTranslation } from "react-i18next"

interface Props {
  drink: IDrink
}

const CocktailCard = (props: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "cocktails",
  })

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const fetchById = async (idDrink: string) => {
    const drink = await getById(idDrink)
    dispatch(setSelectedCockatil(drink))
  }

  const handleClickDrink = () => {
    if (props.drink.strCategory) {
      dispatch(setSelectedCockatil(props.drink))
    } else {
      fetchById(props.drink.idDrink)
    }
    navigate(`/cocktail/detail/${props.drink.idDrink}`)
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
            loading="lazy"
          />
        </CardActionArea>
      </Card>
      <Typography
        fontFamily="NanumSquareNeoBold"
        gutterBottom
        variant="subtitle1"
        m={0}
        sx={{ boxSizing: "border-box" }}
      >
        {/* {t(props.drink.strDrink)} */}
        {props.drink.strDrink}
      </Typography>
    </div>
  )
}

export default CocktailCard
