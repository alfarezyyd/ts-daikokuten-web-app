import {Card, CardBody, Input, Tab, Tabs} from "@nextui-org/react";
import {CalendarCheck, CalendarX, MagnifyingGlass} from "@phosphor-icons/react";

export default function CardTab() {
  return (
    <>
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
                        startContent={
                          <MagnifyingGlass size={32} color="#2e2e2e"/>
                        }
                        size="lg"
                      />
                      <div className="flex flex-row mt-4">
                        <Input
                          variant={"bordered"}
                          placeholder="Holiday Inn & Suites Jakarta Gajah Mada"
                          startContent={
                            <CalendarCheck size={32} color="#2e2e2e"/>
                          }
                          size="lg"
                        />
                        <Input
                          variant={"bordered"}
                          placeholder="Holiday Inn & Suites Jakarta Gajah Mada"
                          startContent={<CalendarX size={32} color="#2e2e2e"/>}
                          size="lg"
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="Flights" title="Flights">
                  <Card>
                    <CardBody>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="Activities" title="Activities">
                  <Card>
                    <CardBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}