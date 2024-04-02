import './globals.css'
import NavbarComponent from "./components/Navbar.tsx";
import Heading from "./components/Heading.tsx";
import CardTab from "./components/CardTab.tsx";
import {NextUIProvider} from "@nextui-org/react";
import Cart from "./app/Cart.tsx";
import Home from "./app/Home.tsx";
import {useNavigate} from "react-router-dom";
import React, {Dispatch, SetStateAction, useState} from "react";
import Summary from "./components/Summary.tsx";
import SummaryModal from "./components/SummaryModal.tsx";


function App() {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true); // State untuk mengontrol tampilan home atau cart
  const [itemCarts, setItemCarts]: [itemCarts: { [key: string]: number }, setIemCarts: Dispatch<SetStateAction<{
    [key: string]: number
  }>>] = useState<{ [key: string]: number }>({});
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan nilai pencarian

  const togglePage = () => {
    if (isHome) {
      navigate('/cart'); // Navigasi ke halaman cart jika pengguna berada di halaman home
    }
  };
  const itemCartsKeys = Object.keys(itemCarts);

  React.useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  return (
    <NextUIProvider navigate={navigate}>
      <div>
        <div className="sticky top-0 w-full z-50">
          <NavbarComponent togglePage={togglePage}/>
        </div>
        <div className="">
          {isHome ? (
            <>
              <Heading/>
              <CardTab setSearchTerm={setSearchTerm}/>
              <div className="lg:container lg:mx-auto md:container md:mx-auto sm:container sm:mx-auto">
                <Home itemCarts={itemCarts} setItemCarts={setItemCarts} searchTerm={searchTerm}/>
              </div>
            </>
          ) : (
            <div className="lg:container lg:mx-auto md:container md:mx-auto sm:container sm:mx-auto mt-10 text-black">
              <Cart itemCarts={itemCarts} setItemCarts={setItemCarts}/>
              <div className="mt-10 flex flex-row-reverse columns-lg">
                <div>
                  <Summary key={itemCartsKeys.join()} itemCarts={itemCarts}/>
                  <SummaryModal setItemCarts={setItemCarts}/>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
