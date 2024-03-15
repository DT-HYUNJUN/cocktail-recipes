import { Box, Button } from "@mui/material"

interface Props {
  value: string
  handleClickMenu: (value: string) => void
}

const Menu = (props: Props) => {
  return (
    <Box display="flex" justifyContent="center" gap={2} width={345}>
      <Button
        onClick={() => props.handleClickMenu("cocktail")}
        variant="contained"
        fullWidth
        size="small"
        color={props.value === "cocktail" ? "primary" : "secondary"}
        sx={{ color: props.value === "cocktail" ? "white" : "black" }}
      >
        칵테일
      </Button>
      <Button
        onClick={() => props.handleClickMenu("ingredient")}
        variant="contained"
        fullWidth
        size="small"
        color={props.value === "ingredient" ? "primary" : "secondary"}
        sx={{ color: props.value === "ingredient" ? "white" : "black" }}
      >
        재료
      </Button>
    </Box>
  )
}

export default Menu
