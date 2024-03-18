import { useNavigate } from "react-router-dom"
import { Box, styled } from "@mui/material"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import { useState } from "react"
import SearchBar from "./SearchBar"

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("")

  const navigate = useNavigate()

  const handleClickHome = () => {
    navigate("/")
  }

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
  }

  return (
    <NavBox>
      <Box onClick={handleClickHome} p={1}>
        <HomeOutlinedIcon fontSize="large" color="primary" />
      </Box>
      <Box component="div" display="flex" justifyContent="center" flexGrow={1}>
        <SearchBar
          inputValue={searchInput}
          handleInputSearch={handleInputSearch}
          handleSubmitSearch={handleSubmitSearch}
          placeholder="칵테일 또는 재료를 검색해보세요."
        />
      </Box>
    </NavBox>
  )
}

export default Navbar

const NavBox = styled(Box)({
  width: "430px",
  boxSizing: "border-box",
  position: "fixed",
  backgroundColor: "white",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  padding: "4px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px -2px 6px",
  marginBottom: "40px",
})

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
