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

const BaseGlass = () => {
  const navigate = useNavigate()

  const handleClickBaseIngred = (value: string) => {
    navigate(`/cocktail/g/${value}`)
  }

  return (
    <Box sx={{ flexGrow: 1, width: 345 }} mt={4}>
      <HeadText text={"글라스"} gutterBottom={true} />
      <Grid container spacing={2}>
        {filterData.g.map(ingred => (
          <Grid width="120px" key={ingred.id} item xs={6}>
            <CardActionArea onClick={() => handleClickBaseIngred(ingred.value)}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center">
                  <IngredImage src={ingred.image} alt="ingred" />
                  <Box flexGrow={1}>
                    <Typography
                      fontFamily="NanumSquareNeoBold"
                      textAlign="center"
                      variant="body2"
                    >
                      {ingred.filterValue}
                    </Typography>
                    <Typography
                      fontFamily="NanumSquareNeoBold"
                      textAlign="center"
                      variant="body2"
                    >
                      글라스
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BaseGlass

const IngredImage = styled("img")({
  width: "40px",
})
