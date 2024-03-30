import {useEffect, useState} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {FoodData} from "../app/FoodData.ts";

export default function Summary({itemCarts}: { itemCarts: string[] }) {
  const [totalPriceItem, setTotalPriceItem] = useState<number>(0);

  useEffect(() => {
    const filteredData = FoodData.filter(item => itemCarts.includes(item.name as string));
    const totalPrice = filteredData.reduce((total, item) => {
      return total + (item.price as number);
    }, 0);
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
