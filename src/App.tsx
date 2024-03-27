import './globals.css'
import NavbarComponent from "./components/Navbar.tsx";
import Heading from "./components/Heading.tsx";
import CardTab from "./components/CardTab.tsx";
import {NextUIProvider} from "@nextui-org/react";
import Cart from "./app/Cart.tsx";
import Home from "./app/Home.tsx";
import {useNavigate} from "react-router-dom";
import React, {Dispatch, SetStateAction, useState} from "react";


function App() {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true); // State untuk mengontrol tampilan home atau cart
  const [itemCarts, setItemCarts]: [string[], Dispatch<SetStateAction<string[]>>] = useState<string[]>([])

  const togglePage = () => {
    if (isHome) {
      navigate('/cart'); // Navigasi ke halaman cart jika pengguna berada di halaman home
    }
  };

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
          <Heading/>
          <CardTab/>
          <div className="md:container md:mx-auto">
            {isHome ? <Home itemCarts={itemCarts} setItemCarts={setItemCarts}/> : <Cart itemCarts={itemCarts}/>} {/* Menampilkan Home atau Cart berdasarkan state */}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App
