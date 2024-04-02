import {useEffect, useState} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {FoodData} from "../app/FoodData.ts";

export default function Summary({itemCarts}: Readonly<{ itemCarts: { [key: string]: number } }>) {
  const [totalPriceItem, setTotalPriceItem] = useState<number>(0);

  useEffect(() => {
    // Hitung total harga dan total kuantitas
    let totalPrice = 0;
    Object.entries(itemCarts).forEach(([itemName, quantity]) => {
      const item = FoodData.find((food) => food.name === itemName);
      if (item) {
        totalPrice += item.price * quantity;
      }
    });
    console.log(itemCarts)
    setTotalPriceItem(totalPrice);
  }, [itemCarts]);


  return (
    <Table hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>INFO</TableColumn>
        <TableColumn>TOTAL</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Semua Item</TableCell>
          <TableCell>{totalPriceItem}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
