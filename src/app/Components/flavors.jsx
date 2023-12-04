import DropDown from "./dropdown";
export default function Flavors({ coffeeFlavors, setCoffeeFlavors }) {
  return (
    <DropDown selectedOption={coffeeFlavors} setOption={setCoffeeFlavors}>
      <option value="" disabled>Select your flavor</option>
      <option value="Vanilla">Vanilla</option>
      <option value="Mocha">Mocha</option>
      <option value="Caramel">Caramel</option>
      <option value="Hazelnut">Hazelnut</option>
      <option value="White chocolate">White Chocolate</option>
      <option value="Sugar free vanilla">Sugar Free Vanilla</option>
      <option value="Pumpkin spice">Pumpkin Spice</option>
    </DropDown>
  );
}
