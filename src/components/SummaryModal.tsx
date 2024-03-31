import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Code} from "@nextui-org/react";
import {Dispatch, SetStateAction} from "react";

export default function SummaryModal({setItemCarts}: Readonly<{
  setItemCarts: Dispatch<SetStateAction<{ [key: string]: number }>>
}>) {
  const {isOpen, onOpen, onClose} = useDisclosure();


  return (
    <>
      <Button color="primary" className="mt-2" onPress={onOpen}>
        Check Out
      </Button>
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Summary Payment</ModalHeader>
              <ModalBody>
                <Code color="primary">Pembayaran berhasil! Terima kasih</Code>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={() => {
                  onClose();
                  setItemCarts({});
                }}>
                  Konfirmasi
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
