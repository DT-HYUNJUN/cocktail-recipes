import type { RootState } from "../../app/store"
import { useAppSelector } from "../../app/hooks"
import { Box, Typography } from "@mui/material"
import IngredientCard from "../CocktailSearch/IngredientCard"

const Ingredient = () => {
  const ingredientList = useAppSelector(
    (state: RootState) => state.ingredientList,
  )

  return (
    <Box display="flex" flexDirection="column" mt={4}>
      <Typography fontFamily="NanumSquareNeoHeavy" gutterBottom pl={3}>
        재료
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        {ingredientList ? (
          ingredientList.map(ingred => (
            <IngredientCard key={ingred.idIngredient} ingred={ingred} />
          ))
        ) : (
          <div>null</div>
        )}
      </Box>
    </Box>
  )
}

export default Ingredient
