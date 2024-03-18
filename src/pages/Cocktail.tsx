import { Box, Container } from "@mui/material"
import BaseIngredient from "../components/Cocktail/BaseIngredient"
import BaseGlass from "../components/Cocktail/BaseGlass"

const Cocktail = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <BaseIngredient />
        <BaseGlass />
      </Box>
    </Container>
  )
}

export default Cocktail
