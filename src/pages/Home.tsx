import { useEffect, useState } from "react"
import { Box, Container, Typography, styled } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import RecipeCard from "../components/RecipeCard"
import { getRandomDrink } from "../features/cocktail/cocktailAPI"
import type { IDrink } from "../types"
import { setRandomCocktail } from "../features/cocktail/cocktailSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"

const Home = () => {
  const [search, setSearch] = useState("")

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      const drink = await getRandomDrink()
      dispatch(setRandomCocktail(drink))
    }
    fetchRandomCocktail()
  }, [])

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <Box component="div" display="flex" justifyContent="center" pt={5}>
        <SearchForm>
          <SearchIcon sx={{ color: "grey" }} fontSize="small" />
          <SearchInput
            value={search}
            onChange={handleInputSearch}
            type="text"
            placeholder="칵테일 또는 재료를 검색해보세요."
          />
        </SearchForm>
      </Box>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Typography variant="h5" gutterBottom>
          랜덤 칵테일
        </Typography>
        <RecipeCard />
      </Box>
    </Container>
  )
}

export default Home

const SearchForm = styled("form")({
  width: "calc(100% - 30px)",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  padding: 10,
})

const SearchInput = styled("input")({
  background: "none",
  border: 0,
  outline: "none",
  fontWeight: "bold",
  width: "100%",
})
