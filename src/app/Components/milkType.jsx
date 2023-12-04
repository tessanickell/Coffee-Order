import DropDown from "./dropdown";
export default function MilkType({ milkType, setMilkType }) {
  return (
    <DropDown selectedOption={milkType} setOption={setMilkType}>
      <option value="" disabled>Select your milk</option>
      <option value="Whole milk">Whole milk</option>
      <option value="Almond milk">Almond milk</option>
      <option value="2% milk">2% milk</option>
      <option value="Skim milk">Skim milk</option>
      <option value="Oat milk">Oat milk</option>
    </DropDown>
  );
}
