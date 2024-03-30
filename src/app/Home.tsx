import CardItem from "../components/CardItem.tsx";
import {FoodData} from "./FoodData.ts";
import ItemInfo from "../interface/ItemInfo.ts";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

export default function Home({itemCarts, setItemCarts}: {
  itemCarts: string[],
  setItemCarts: Dispatch<SetStateAction<string[]>>
}) {
  const filteredArray = FoodData.filter(item => !itemCarts.includes(item.name as string));
  const [key, setKey] = useState(0); // State untuk mengubah key
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [itemCarts]);
  return (
    <div className="grid grid-cols-3 gap-4 mt-5" key={key}>
      {filteredArray.map((value: ItemInfo) => {
        return <CardItem key={value.name} itemInfo={value} itemCarts={itemCarts} setItemCarts={setItemCarts}/>
      })};
    </div>
  )
}