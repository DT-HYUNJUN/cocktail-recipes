import "./App.css"
import Home from "./pages/Home"
import { ThemeProvider, createTheme, styled } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DrinkDetail from "./pages/CocktailDetail"
import BaseIngredDrinks from "./pages/BaseIngredCocktails"
import CocktailSearch from "./pages/CocktailSearch"
import Navbar from "./components/global/Navbar"

const theme = createTheme({
  typography: {
    fontFamily: "NanumSquareNeo, NanumSquareNeoBold",
  },
  palette: {
    primary: {
      main: "#00CED1",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  shape: {
    borderRadius: 10,
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drink/:idDrink" element={<DrinkDetail />} />
            <Route path="/:ingred" element={<BaseIngredDrinks />} />
            <Route path="/search/:name" element={<CocktailSearch />} />
          </Routes>
        </BrowserRouter>
      </Wrap>
    </ThemeProvider>
  )
}

export default App

const Wrap = styled("div")({
  position: "relative",
  maxWidth: "430px",
  minHeight: "100dvh",
  margin: "0 auto",
  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  paddingTop: "100px",
  paddingBottom: "40px",
})
