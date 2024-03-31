import {Typewriter} from "react-simple-typewriter";


export default function Heading() {
  return (
    <div className="img -mt-16 h-[650px]">
      <h4 className="text-center pt-32 text-2xl">Mau makan apa hari ini? 🍤</h4>
      <div className="text-center mt-12 text-6xl md:text-7xl lg:text-8xl font-bold">
        <h1 className="mb-4">Jelajahi beragam cita</h1>
        rasa{" "}
        <Typewriter
          loop={0}
          cursor={true}
          cursorBlinking={true}
          typeSpeed={140}
          deleteSpeed={140}
          delaySpeed={3000}
          words={[
            "Ayam Balado",
            "Kentang Balado",
            "Tumis Toge",
            "Tumis Wortel",
          ]}
        />
      </div>
    </div>
  )
}