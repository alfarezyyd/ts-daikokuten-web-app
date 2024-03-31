import React, {Dispatch, SetStateAction} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Image
} from "@nextui-org/react";
import {DeleteIcon} from "../components/DeleteIcon.tsx";
import ItemInfo from "../interface/ItemInfo.ts";
import {FoodData} from "./FoodData.ts";
import Counter from "../components/Counter.tsx";

const columns = [
  {name: "IMAGE", uid: "image"},
  {name: "NAME", uid: "name"},
  {name: "QUANTITY", uid: "quantity"},
  {name: "PRICE", uid: "price"},
  {name: "ACTIONS", uid: "actions"},
];
export default function Cart({itemCarts, deleteItemFromCart, setItemCarts}: Readonly<{
                               itemCarts: { [key: string]: number },
                               deleteItemFromCart: (itemName: string) => void,
                               setItemCarts: Dispatch<SetStateAction<{
                                 [key: string]: number
                               }>>
                             }>
) {
  const filteredArray = FoodData.filter(
    item => (Object.keys(itemCarts).includes(item.name))
  );

  const updateQuantity = (itemName: string, newQuantity: number) => {
    setItemCarts(prevState => ({
      ...prevState,
      [itemName]: newQuantity
    }));
  };


  const renderCell = React.useCallback((item: ItemInfo, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof ItemInfo];

    switch (columnKey) {
      case "image":
        return (
          <div className="flex justify-center">
            <Image
              alt="Item Image"
              className="object-cover"
              height={100}
              width={100}
              shadow="md"
              src={"assets/food/" + cellValue}
            />
          </div>
        );
      case "name":
        return (
          <div>
            <p className="text-bold text-sm capitalize text-center">{cellValue}</p>
          </div>
        );
      case "quantity":
        return (
          <div className="flex justify-center">
            <Counter value={itemCarts[item.name] || 0}
                     onChange={(newQuantity: number) => updateQuantity(item.name, newQuantity)}/>
          </div>
        )
      case "price":
        return (
          <div className="flex justify-center">
            <Chip
              className="capitalize"
              color="success"
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-center gap-2">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => deleteItemFromCart(item.name)}/>
              </span>
          </div>
        );
      default:
        return cellValue;
    }
  }, [filteredArray]);

  return (
    <Table aria-label="Cart table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="text-center"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={filteredArray}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
