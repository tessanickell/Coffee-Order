export default function CoffeeTemp({ coffeeTemp, setCoffeeTemp }) {

  return (
    <div className="flex gap-8">
      <button onClick={() => setCoffeeTemp("Iced")} className={`${coffeeTemp === "Iced" ? "bg-[#4A392A] text-[#fff]" : "bg-transparent text-[#4A392A]"} border-[#4A392A] border-[4px] rounded-xl  outline-none py-3 px-8`}>Iced</button>
      <button onClick={() => setCoffeeTemp("Hot")} className={`${coffeeTemp === "Hot" ? "bg-[#4A392A] text-[#fff]" : "bg-transparent text-[#4A392A]"} border-[#4A392A] border-[4px] rounded-xl  outline-none py-3 px-8`}>Hot</button>
    </div>
  );
}
