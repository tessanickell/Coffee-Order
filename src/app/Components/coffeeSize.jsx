
export default function CoffeeSize({ coffeeSize, setCoffeeSize }) {
  return (
    <div className="flex items-baseline gap-10">
      <div className="flex flex-col justify-center cursor-pointer" onClick={() => setCoffeeSize("Small")}>
        <img className="w-12" src={coffeeSize === "Small" ? "coffee_filled.svg" : "coffee_outlined.svg"}></img>
        <p className="text-[#4A392A] -mt-3">small</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer" onClick={() => setCoffeeSize("Medium")}>
        <img className=" w-16" src={coffeeSize === "Medium" ? "coffee_filled.svg" : "coffee_outlined.svg"}></img>
        <p className="text-[#4A392A] -mt-3 pr-2">medium</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer" onClick={() => setCoffeeSize("Large")}>
        <img className="w-20" src={coffeeSize === "Large" ? "coffee_filled.svg" : "coffee_outlined.svg"}></img>
        <p className="text-[#4A392A] -mt-3 pr-4">large</p>
      </div>
    </div>
  );
}
