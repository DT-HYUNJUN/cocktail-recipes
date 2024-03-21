import {
  Box,
  CardActionArea,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material"
import HeadText from "./HeadText"
import { useNavigate } from "react-router-dom"
import type { IFilterData } from "../../assets/data/filterData"

interface Props {
  filterData: IFilterData
  filter: "c" | "i" | "g" | "a"
}

const FilterCard = (props: Props) => {
  const navigate = useNavigate()

  const handleClickFilter = (value: string) => {
    navigate(`/cocktail/${props.filter}/${value}`)
  }

  return (
    <Box sx={{ flexGrow: 1, width: 345 }} mt={4}>
      <HeadText text={props.filterData.filterName} gutterBottom={true} />
      <Grid container spacing={2}>
        {props.filterData.filterList.map(ingred => (
          <Grid width="120px" key={ingred.id} item xs={6}>
            <CardActionArea onClick={() => handleClickFilter(ingred.value)}>
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

export default FilterCard

const IngredImage = styled("img")({
  width: "40px",
})
