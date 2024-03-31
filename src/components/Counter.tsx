import {useState} from "react";

export default function Counter({value, onChange}: { value: number, onChange: (quantity: number) => void }) {
  const [quantity, setQuantity] = useState(value);

  const decrement = () => {
    const newValue = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newValue);
    onChange(newValue);
  };

  const increment = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
    onChange(newValue);
  };
  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button data-action="decrement"
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                onClick={decrement}
                disabled={quantity === 1}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number"
               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
               name="custom-input-number" readOnly value={quantity}></input>
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