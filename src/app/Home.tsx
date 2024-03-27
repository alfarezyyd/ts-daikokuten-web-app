import CardItem from "../components/CardItem.tsx";
import {FoodData} from "./FoodData.ts";
import ItemInfo from "../../public/interface/ItemInfo.ts";
import {Dispatch, SetStateAction} from "react";

export default function Home({itemCarts, setItemCarts}: {
  itemCarts: string[],
  setItemCarts: Dispatch<SetStateAction<string[]>>
}) {
  const filteredArray = FoodData.filter(item => !itemCarts.includes(item.name as string));
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {filteredArray.map((value: ItemInfo) => {
        return <CardItem itemInfo={value} itemCarts={itemCarts} setItemCarts={setItemCarts}/>
      })};
    </div>
  )
}