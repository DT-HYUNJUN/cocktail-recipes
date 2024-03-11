import { ArrowBackIosNew } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <ArrowBackIosNew
      onClick={() => navigate(-1)}
      sx={{ position: "fixed", top: 10, left: 10 }}
    />
  )
}

export default BackButton
