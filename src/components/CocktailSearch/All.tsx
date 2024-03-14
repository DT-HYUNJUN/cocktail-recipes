import { Box, Typography } from "@mui/material"
import React from "react"
import type { RootState } from "../../app/store"
import { useAppSelector } from "../../app/hooks"
import CocktailCard from "../CocktailCard"

const All = () => {
  const drinkList = useAppSelector((state: RootState) => state.cocktailList)

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      mt={4}
    >
      <Typography fontFamily="NanumSquareNeoHeavy" gutterBottom pl={2}>
        칵테일
      </Typography>
      {drinkList ? (
        drinkList.map(drink => (
          <CocktailCard key={drink.idDrink} drink={drink} />
        ))
      ) : (
        <div>null</div>
      )}
    </Box>
  )
}

export default All
