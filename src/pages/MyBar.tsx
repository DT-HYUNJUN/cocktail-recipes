import { Box, Container } from "@mui/material"
import IngredList from "../components/MyBar/IngredList"
import MyBarList from "../components/MyBar/MyBarList"
import { useState } from "react"
import MenuBar from "../components/Common/MenuBar"
import { useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"

const MyBar = () => {
  const [isClickedMyBarList, setIsClickedMyBarList] = useState(true)

  const handleClickMyBarList = () => {
    setIsClickedMyBarList(true)
  }

  const handleClickIngredList = () => {
    setIsClickedMyBarList(false)
  }

  const count = useAppSelector((state: RootState) => state.myBar).length

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <MenuBar
          value={isClickedMyBarList}
          handleClickOne={handleClickMyBarList}
          handleClickTwo={handleClickIngredList}
          text={{ one: `마이 바 (${count})`, two: "재료" }}
        />
        {isClickedMyBarList ? <MyBarList /> : <IngredList />}
      </Box>
    </Container>
  )
}

export default MyBar
