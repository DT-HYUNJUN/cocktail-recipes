// glass
import Collins from "../images/glass/collins.png"
import Highball from "../images/glass/highball.png"
import Hurricane from "../images/glass/hurricane.png"
import Margarita from "../images/glass/margarita.png"
import Martini from "../images/glass/martini.png"
import Old from "../images/glass/old.png"
// filterValue
import Rum from "../images/spirit/rum.png"
import Gin from "../images/spirit/gin.png"
import Vodka from "../images/spirit/vodka.png"
import Whiskey from "../images/spirit/whiskey.png"
import Tequila from "../images/spirit/tequila.png"
import Brandy from "../images/spirit/brandy.png"

interface IFilterData {
  id: number
  value: string
  filterValue: string
  image: string
}

interface IFilter {
  c: IFilterData[]
  g: IFilterData[]
  i: IFilterData[]
  a: IFilterData[]
}

export const filterData: IFilter = {
  c: [],
  g: [
    {
      id: 0,
      value: "highball_glass",
      filterValue: "하이볼",
      image: Highball,
    },
    {
      id: 1,
      value: "cocktail_glass",
      filterValue: "마티니",
      image: Martini,
    },
    {
      id: 2,
      value: "old-fashioned_glass",
      filterValue: "올드패션드 ",
      image: Old,
    },
    {
      id: 3,
      value: "collins_glass",
      filterValue: "콜린스",
      image: Collins,
    },
    {
      id: 4,
      value: "hurricane_glass",
      filterValue: "허리케인",
      image: Hurricane,
    },
    {
      id: 5,
      value: "margarita/Coupette_glass",
      filterValue: "마가리타",
      image: Margarita,
    },
  ],
  i: [
    { id: 0, value: "rum", filterValue: "럼", image: Rum },
    { id: 1, value: "gin", filterValue: "진", image: Gin },
    { id: 2, value: "vodka", filterValue: "보드카", image: Vodka },
    { id: 3, value: "scotch", filterValue: "위스키", image: Whiskey },
    { id: 4, value: "tequila", filterValue: "데킬라", image: Tequila },
    { id: 5, value: "brandy", filterValue: "브랜디", image: Brandy },
  ],
  a: [],
}
// "c" | "g" | "i" | "a"
