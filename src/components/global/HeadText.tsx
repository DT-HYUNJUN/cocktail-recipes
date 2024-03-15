import { Typography } from "@mui/material"

interface Props {
  text: string
  padding?: number
}

const HeadText = (props: Props) => {
  return (
    <Typography
      color="primary"
      fontFamily="NanumSquareNeoHeavy"
      pl={props.padding}
      gutterBottom
    >
      {props.text}
    </Typography>
  )
}

export default HeadText
