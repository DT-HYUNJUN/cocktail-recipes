import { useAppSelector } from "../../app/hooks"
import type { RootState } from "../../app/store"

const MyBarList = () => {
  const myBar = useAppSelector((state: RootState) => state.myBar)

  return myBar.map(ingred => <div key={ingred}>{ingred}</div>)
}

export default MyBarList
