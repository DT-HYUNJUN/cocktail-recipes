import { Box, Button } from "@mui/material"

interface IText {
  name: string
  value: string
}

interface Props {
  value: string
  textOne: IText
  textTwo: IText
  handleClickMenu: (value: string) => void
}

const MenuBar = (props: Props) => {
  return (
    <Box display="flex" justifyContent="center" gap={2} width={345}>
      <Button
        onClick={() => props.handleClickMenu(props.textOne.name)}
        variant="contained"
        fullWidth
        size="small"
        color={props.value === props.textOne.name ? "primary" : "secondary"}
        sx={{ color: props.value === props.textOne.name ? "white" : "black" }}
      >
        {props.textOne.value}
      </Button>
      <Button
        onClick={() => props.handleClickMenu(props.textTwo.name)}
        variant="contained"
        fullWidth
        size="small"
        color={props.value === props.textTwo.name ? "primary" : "secondary"}
        sx={{ color: props.value === props.textTwo.name ? "white" : "black" }}
      >
        {props.textTwo.value}
      </Button>
    </Box>
  )
}

export default MenuBar
