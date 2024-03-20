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
import { useAppSelector } from "../../app/hooks"
import type { RootState } from "../../app/store"
import { ingredientData } from "../../assets/data/ingredientData"
import SearchBar from "../Common/SearchBar"
import { useEffect, useState } from "react"

interface Props {
  handleClickIngredient: (strIngredient: string) => void
}

const IngredList = (props: Props) => {
  const [arr, setArr] = useState<{ strIngredient: string }[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const { t } = useTranslation("translation", {
    keyPrefix: "ingredients",
  })

  const myBar = useAppSelector((state: RootState) => state.myBar)

  useEffect(() => {
    setArr(
      (inputValue
        ? ingredientData.filter(ingred =>
            t(`names.${ingred.strIngredient.toLowerCase()}`).includes(
              inputValue,
            ),
          )
        : ingredientData
      ).sort((a, b) =>
        t(`names.${a.strIngredient.toLowerCase()}`).localeCompare(
          t(`names.${b.strIngredient.toLowerCase()}`),
          "ko-KR",
        ),
      ),
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
                onClick={() =>
                  props.handleClickIngredient(ingred.strIngredient)
                }
              >
                <Paper
                  elevation={3}
                  sx={{
                    padding: 2,
                    bgcolor: myBar.find(
                      myIngred => myIngred === ingred.strIngredient,
                    )
                      ? "#d9f1ff"
                      : "white",
                  }}
                >
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
                        {t(`names.${ingred.strIngredient.toLowerCase()}`)}
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
