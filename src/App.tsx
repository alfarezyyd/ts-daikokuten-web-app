import './globals.css'
import NavbarComponent from "./components/Navbar.tsx";
import Heading from "./components/Heading.tsx";
import CardTab from "./components/CardTab.tsx";

function App() {

  return (
    <>

      <div>
        <div className="sticky top-0 w-full z-50">
          <NavbarComponent/>
        </div>
        <div className="">
          <Heading/>
          <CardTab/>
        </div>
      </div>
    </>
  )
    ;
}

export default App
