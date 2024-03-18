import { Box, Container, Paper, styled } from "@mui/material"
import IngredList from "../components/MyBar/IngredList"
import MyBarList from "../components/MyBar/MyBarList"
import { useState } from "react"
import MenuBar from "../components/Common/MenuBar"

const MyBar = () => {
  const [isClickedMyBarList, setIsClickedMyBarList] = useState(true)

  const handleClickMyBarList = () => {
    setIsClickedMyBarList(true)
  }
  const handleClickIngredList = () => {
    setIsClickedMyBarList(false)
  }

  return (
    <Container>{isClickedMyBarList ? <MyBarList /> : <IngredList />}</Container>
  )
}

export default MyBar

const TextBox = styled(Box)({
  width: "100%",
  textAlign: "center",
})

const MenuPaper = styled(Paper)({
  width: "100%",
  padding: "",
})
