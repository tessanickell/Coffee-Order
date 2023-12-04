import DropDown from "./dropdown";

export default function CoffeeType({ coffeeType, setCoffeeType }) {
  return (
    <DropDown selectedOption={coffeeType} setOption={setCoffeeType}>
      <option value="" disabled>Select your coffee type</option>
      <option value="Latte">Latte</option>
      <option value="Cappuccino">Cappuccino</option>
      <option value="Americano">Americano</option>
    </DropDown>
  );
}
