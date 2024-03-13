import React from "react"
import { Box, Grid, Paper, Typography, styled } from "@mui/material"
import Rum from "../assets/images/rum.png"
import Gin from "../assets/images/gin.png"
import Vodka from "../assets/images/vodka.png"
import Whiskey from "../assets/images/whiskey.png"
import Tequila from "../assets/images/tequila.png"
import { useNavigate } from "react-router-dom"

const base = [
  { id: 0, value: "Rum", ingredient: "럼", image: Rum },
  { id: 1, value: "Gin", ingredient: "진", image: Gin },
  { id: 2, value: "Vodka", ingredient: "보드카", image: Vodka },
  { id: 3, value: "Scotch", ingredient: "위스키", image: Whiskey },
  { id: 4, value: "Tequila", ingredient: "데킬라", image: Tequila },
]

const BaseIngredient = () => {
  const navigate = useNavigate()

  const handleClickBaseIngred = (value: string) => {
    navigate(`/${value}`)
  }

  return (
    <Box sx={{ flexGrow: 1, width: 345 }} mt={4}>
      <Typography fontFamily="NanumSquareNeoHeavy" gutterBottom>
        베이스 스피릿
      </Typography>
      <Grid container spacing={2}>
        {base.map(item => (
          <Grid
            onClick={() => handleClickBaseIngred(item.value)}
            width="120px"
            key={item.id}
            item
            xs={6}
          >
            <Paper sx={{ padding: 2 }}>
              <Box display="flex" alignItems="center">
                <IngredImage src={item.image} alt="ingred" />
                <Typography fontFamily="NanumSquareNeoBold" textAlign="center">
                  {item.ingredient}
                </Typography>
              </Box>
            </Paper>
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
