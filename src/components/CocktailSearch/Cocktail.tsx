import { Box, Typography } from "@mui/material"
import CocktailCard from "../Common/CocktailCard"
import { useAppSelector } from "../../app/hooks"
import type { RootState } from "../../app/store"

const Cocktail = () => {
  const drinkList = useAppSelector((state: RootState) => state.cocktailList)

  return (
    <Box display="flex" flexDirection="column" mt={4}>
      <Typography fontFamily="NanumSquareNeoHeavy" gutterBottom pl={3}>
        칵테일
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        {drinkList ? (
          drinkList.map(drink => (
            <CocktailCard key={drink.idDrink} drink={drink} />
          ))
        ) : (
          <div>null</div>
        )}
      </Box>
    </Box>
  )
}

export default Cocktail
