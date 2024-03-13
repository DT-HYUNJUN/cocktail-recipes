import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getByIngredient } from "../features/cocktail/cocktailAPI"
import type { IDrink } from "../types"
import CocktailCard from "../components/CocktailCard"
import { Box, Container } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setCocktailList } from "../features/cocktail/cocktailSlice"
import type { RootState } from "../app/store"

const BaseIngredCocktails = () => {
  const { Ingred } = useParams()

  const dispatch = useAppDispatch()
  const drinkList = useAppSelector((state: RootState) => state.cocktailList)

  useEffect(() => {
    const fetchByIngredient = async () => {
      const drinks = await getByIngredient(Ingred!)
      dispatch(setCocktailList(drinks))
    }
    fetchByIngredient()
  }, [])

  return (
    drinkList && (
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          pt={4}
        >
          {drinkList.map(drink => (
            <CocktailCard key={drink.idDrink} />
          ))}
        </Box>
      </Container>
    )
  )
}

export default BaseIngredCocktails
