export default function Receipt({ order }) {
  return (
    <div className="flex flex-col gap-10 text-[#4A392A]">
      <h1 className="text-[#4A392A] text-4xl">Your Order Receipt</h1>
      <p className="font-medium"><span className="font-bold">Size:</span> {order.coffeeSize}</p>
      <p className="font-medium"><span className="font-bold">Coffee Temp:</span> {order.coffeeTemp}</p>
      <p className="font-medium"><span className="font-bold">Coffee Type:</span> {order.coffeeType}</p>
      <p className="font-medium"><span className="font-bold">Shots of espresso:</span> {order.espressoShots}</p>
      <p className="font-medium"><span className="font-bold">Favor:</span> {order.coffeeFlavors}</p>
      <p className="font-medium"><span className="font-bold">Milk:</span> {order.milkType}</p>
    </div>
  );
}
