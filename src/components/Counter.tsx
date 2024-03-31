import {useState} from "react";

export default function Counter({initialQuantity, onChange}: Readonly<{
  initialQuantity: number;
  onChange: (newQuantity: number) => void
}>) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decrement = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };


  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button data-action="decrement"
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                onClick={decrement}>
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number"
               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
               name="custom-input-number" value={quantity} readOnly></input>
        <button data-action="increment"
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  )
}