import {Button, Card, CardBody, Image} from "@nextui-org/react";
import "../globals.css"
import ItemInfo from "../interface/ItemInfo.ts";
import {Dispatch, SetStateAction} from "react";


export default function CardItem({itemInfo, itemCarts, setItemCarts}: Readonly<{
  itemInfo: ItemInfo,
  itemCarts: { [key: string]: number },
  setItemCarts: Dispatch<SetStateAction<{ [key: string]: number }>>,
}>) {

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-4 md:grid-cols-10 gap-4 md:gap-2 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={"assets/food/" + itemInfo.image}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-4 md:col-span-6 ml-2">
            <h4 className="font-bold text-large">{itemInfo.name}</h4>
            <p className="text-tiny uppercase font-bold">Rp. {itemInfo.price}</p>
            <div className="col-span-2 md:col-span-4 mt-2">
              <Button
                className={"bg-primary text-white"}
                color="primary"
                radius="full"
                size="sm"
                variant={"bordered"}
                onClick={() => {
                  // Menyalin objek itemCarts ke objek baru
                  const updatedItemCarts = {...itemCarts};
                  // Menambahkan atau memperbarui kunci dengan nama item
                  updatedItemCarts[itemInfo.name] = 1;
                  // Mengatur nilai itemCarts dengan objek baru
                  setItemCarts(updatedItemCarts);
                }}
              >Add to Cart
              </Button>
            </div>
          </div>

        </div>
      </CardBody>
    </Card>
  );
}
