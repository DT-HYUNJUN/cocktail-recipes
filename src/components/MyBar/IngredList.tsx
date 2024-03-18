import {
  Box,
  CardActionArea,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HeadText from "../Common/HeadText"
import { useTranslation } from "react-i18next"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import type { RootState } from "../../app/store"
import { ingredientData } from "../../assets/data/ingredientData"
import { addToMyBar } from "../../features/cocktail/cocktailSlice"
import SearchBar from "../Common/SearchBar"
import { useEffect, useState } from "react"

const IngredList = () => {
  const [arr, setArr] = useState<{ strIngredient: string }[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const myBar = useAppSelector((state: RootState) => state.myBar)

  const handleClickIngred = (strIngredient: string) => {
    dispatch(addToMyBar({ strIngredient }))
  }

  useEffect(() => {
    setArr(
      inputValue
        ? ingredientData.filter(ingred =>
            t(ingred.strIngredient).includes(t(inputValue)),
          )
        : ingredientData,
    )
  }, [inputValue])

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <SearchBar
        inputValue={inputValue}
        handleInputSearch={handleInputSearch}
        handleSubmitSearch={handleSubmitSearch}
        placeholder="찾으시는 재료를 검색해보세요."
      />
      <Box sx={{ flexGrow: 1, width: 345 }} mt={4}>
        <HeadText text={"재료"} gutterBottom={true} />
        <Grid container spacing={2}>
          {arr.map((ingred, index) => (
            <Grid key={index} item xs={6}>
              <CardActionArea
                onClick={() => handleClickIngred(ingred.strIngredient)}
              >
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <IngredImage
                      src={`https://www.thecocktaildb.com/images/ingredients/${ingred.strIngredient}-Medium.png`}
                      alt="ingred"
                    />
                    <Box flexGrow={1}>
                      <Typography
                        fontFamily="NanumSquareNeoBold"
                        textAlign="center"
                        variant="body1"
                      >
                        {t(ingred.strIngredient)}
                      </Typography>
                      {myBar.find(
                        myIngred => myIngred === ingred.strIngredient,
                      ) && (
                        <CheckCircleOutlineIcon
                          sx={{ position: "absolute", top: 10, right: 10 }}
                          color="primary"
                        />
                      )}
                    </Box>
                  </Box>
                </Paper>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default IngredList

const IngredImage = styled("img")({
  width: "150px",
})
