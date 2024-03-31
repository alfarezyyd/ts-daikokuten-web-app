import {Card, CardBody, Input, Tab, Tabs} from "@nextui-org/react";
import {MagnifyingGlass} from "@phosphor-icons/react";
import React, {useState} from "react";

export default function CardTab({setSearchTerm}: Readonly<{
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}>) {
  const [searchValue, setSearchValue] = useState("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setSearchValue(value);
    setSearchTerm(value);
  };

  return (
    <div className="justify-center flex bg-orange-100">
      <Card className="w-[700px] -translate-y-28">
        <CardBody>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" variant="underlined">
              <Tab key="Makanan" title="Makanan">
                <Card>
                  <CardBody>
                    <Input
                      variant={"bordered"}
                      placeholder="Soto Betawi"
                      value={searchValue}
                      onChange={handleChange}
                      startContent={
                        <MagnifyingGlass size={32} color="#2e2e2e"/>
                      }
                      size="lg"
                    />
                  </CardBody>
                </Card>
              </Tab>

            </Tabs>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}