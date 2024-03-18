import { Typography } from "@mui/material"

interface Props {
  text: string
  padding?: number
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
  gutterBottom?: boolean
}

const HeadText = (props: Props) => {
  return (
    <Typography
      color="primary"
      fontFamily="NanumSquareNeoHeavy"
      pl={props.padding}
      variant={props.variant}
      gutterBottom={props.gutterBottom}
    >
      {props.text}
    </Typography>
  )
}

export default HeadText
