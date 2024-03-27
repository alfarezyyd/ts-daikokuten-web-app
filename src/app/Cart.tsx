import {FoodData} from "./FoodData.ts";
import CardItemCart from "../components/CardItemCart.tsx";

export default function Cart({itemCarts}: { itemCarts: string[] }) {
  const filteredArray = FoodData.filter(item => itemCarts.includes(item.name as string));

  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {filteredArray.map(value => {
        return <CardItemCart itemInfo={value}/>
      })}
    </div>
  )
}
