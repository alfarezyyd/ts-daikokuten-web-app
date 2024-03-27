import {Button, Card, CardBody, Image} from "@nextui-org/react";
import "../globals.css"
import ItemInfo from "../../public/interface/ItemInfo.ts";
import {Dispatch, SetStateAction} from "react";


export default function CardItem({itemInfo, itemCarts, setItemCarts}: {
  itemInfo: ItemInfo,
  itemCarts: string[],
  setItemCarts: Dispatch<SetStateAction<string[]>>,
}) {

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
              src="/food/ati-ampela.png"
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
                  setItemCarts([...itemCarts, itemInfo.name as string])
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
