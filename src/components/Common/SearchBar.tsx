import { styled } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

interface Props {
  inputValue: string
  handleInputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmitSearch: (e: React.ChangeEvent<HTMLFormElement>) => void
  placeholder: string
}

const SearchBar = (props: Props) => {
  return (
    <SearchForm onSubmit={props.handleSubmitSearch}>
      <SearchIcon sx={{ color: "grey" }} fontSize="small" />
      <SearchInput
        value={props.inputValue}
        onChange={props.handleInputSearch}
        type="text"
        placeholder={props.placeholder}
      />
    </SearchForm>
  )
}

export default SearchBar
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
