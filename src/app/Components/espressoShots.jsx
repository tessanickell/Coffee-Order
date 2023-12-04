import DropDown from "./dropdown";
export default function EspressoShots({ espressoShots, setEspressoShots }) {
  return (
    <DropDown selectedOption={espressoShots} setOption={setEspressoShots}>
      <option value="" disabled>How many shots of espresso?</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </DropDown>
  );
}
