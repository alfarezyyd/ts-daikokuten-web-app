import {Button, Card, CardBody, Image} from "@nextui-org/react";
import "../globals.css"
import ItemInfo from "../interface/ItemInfo.ts";


export default function CardItemCart({itemInfo}: {
  itemInfo: ItemInfo,

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
              src={"assets/food/" + itemInfo.image}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-4 md:col-span-6 ml-2">
            <h4 className="font-bold text-large">{itemInfo.name}</h4>
            <p className="text-tiny uppercase font-bold">Rp. {itemInfo.price}</p>
            <div className="col-span-2 md:col-span-4 mt-2">
              <Button
                className={"bg-transparent text-foreground border-default-200"}
                color="primary"
                radius="full"
                size="sm"
                variant={"solid"}
              >
              </Button>
            </div>
          </div>

        </div>
      </CardBody>
    </Card>
  );
}
