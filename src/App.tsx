import styled from "styled-components"
import "./App.css"
import Home from "./pages/Home"
import { ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DrinkDetail from "./pages/DrinkDetail"

const theme = createTheme({
  typography: {
    fontFamily: "NanumSquareNeo, NanumSquareNeoBold",
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drink/:idDrink" element={<DrinkDetail />} />
          </Routes>
        </BrowserRouter>
      </Wrap>
    </ThemeProvider>
  )
}

export default App

const Wrap = styled.div`
  position: relative;
  max-width: 430px;
  min-height: 100dvh;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`
