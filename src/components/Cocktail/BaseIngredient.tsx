import {
  Box,
  CardActionArea,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import HeadText from "../Common/HeadText"
import { filterData } from "../../assets/data/filterData"

const BaseIngredient = () => {
  const navigate = useNavigate()

  const handleClickBaseIngred = (value: string) => {
    navigate(`/cocktail/i/${value}`)
  }

  return (
    <Box sx={{ flexGrow: 1, width: 345 }} mt={4}>
      <HeadText text={"스피릿"} gutterBottom={true} />
      <Grid container spacing={2}>
        {filterData.i.map(ingred => (
          <Grid width="120px" key={ingred.id} item xs={6}>
            <CardActionArea onClick={() => handleClickBaseIngred(ingred.value)}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center">
                  <IngredImage src={ingred.image} alt="ingred" />
                  <Typography
                    fontFamily="NanumSquareNeoBold"
                    textAlign="center"
                    flexGrow={1}
                  >
                    {ingred.filterValue}
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
