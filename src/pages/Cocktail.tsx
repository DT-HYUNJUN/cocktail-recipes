import { Box, Container } from "@mui/material"
import FilterCard from "../components/Common/FilterCard"
import { filterData } from "../assets/data/filterData"

const Cocktail = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <FilterCard filterData={filterData.i} filter="i" />
        <FilterCard filterData={filterData.g} filter="g" />
      </Box>
    </Container>
  )
}

export default Cocktail
