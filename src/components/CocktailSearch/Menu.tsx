import { Box, Button } from "@mui/material"

interface Props {
  value: string
  handleClickMenu: (value: string) => void
}

const Menu = (props: Props) => {
  return (
    <Box display="flex" justifyContent="center" gap={2} width={345}>
      <Button
        onClick={() => props.handleClickMenu("all")}
        variant={props.value === "all" ? "contained" : "outlined"}
        fullWidth
        size="small"
      >
        전체
      </Button>
      <Button
        onClick={() => props.handleClickMenu("cocktail")}
        variant={props.value === "cocktail" ? "contained" : "outlined"}
        fullWidth
        size="small"
      >
        칵테일
      </Button>
      <Button
        onClick={() => props.handleClickMenu("ingredient")}
        variant={props.value === "ingredient" ? "contained" : "outlined"}
        fullWidth
        size="small"
      >
        재료
      </Button>
    </Box>
  )
}

export default Menu
