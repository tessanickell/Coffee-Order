export default function PlaceOrder({ onPlaceOrder }) {
  return (
    <button onClick={onPlaceOrder} className={"bg-[#4A392A] text-[#fff] border-[#4A392A] border-[4px] rounded-xl  outline-none py-2 px-10"}>Place Order</button>
  );
}
