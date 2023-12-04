"use client";
import { useState } from "react";
import CoffeeSize from "./coffeeSize";
import CoffeeTemp from "./coffeeTemp";
import CoffeeType from "./coffeeType";
import EspressoShots from "./espressoShots";
import Flavors from "./flavors"
import MilkType from "./milkType";
import PlaceOrder from "./placeOrder";

export default function OrderForm({ setOrder }) {
  const [coffeeSize, setCoffeeSize] = useState("Small");
  const [coffeeType, setCoffeeType] = useState("");
  const [espressoShots, setEspressoShots] = useState("");
  const [coffeeFlavors, setCoffeeFlavors] = useState("");
  const [coffeeTemp, setCoffeeTemp] = useState("Iced");
  const [milkType, setMilkType] = useState("");

  function handlePlaceOrder() {
    if (!coffeeSize || !coffeeType || !espressoShots || !coffeeFlavors || !coffeeTemp || !milkType) return;
    setOrder({
      coffeeSize, coffeeType, espressoShots, coffeeFlavors, coffeeTemp, milkType
    });
  }

  return (
    <div className="flex flex-col gap-8 items-start">
      <h1 className="text-[#4A392A] text-4xl">Order Now</h1>
      <CoffeeSize coffeeSize={coffeeSize} setCoffeeSize={setCoffeeSize} />
      <CoffeeTemp coffeeTemp={coffeeTemp} setCoffeeTemp={setCoffeeTemp} />
      <CoffeeType setCoffeeType={setCoffeeType} coffeeType={coffeeType} />
      <EspressoShots setEspressoShots={setEspressoShots} espressoShots={espressoShots} />
      <Flavors setCoffeeFlavors={setCoffeeFlavors} coffeeFlavors={coffeeFlavors} />
      <MilkType milkType={milkType} setMilkType={setMilkType} />
      <PlaceOrder onPlaceOrder={handlePlaceOrder} />
    </div>
  );
}
