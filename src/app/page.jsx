"use client";
import { useState } from "react";
import OrderForm from "./Components/orderForm";
import Receipt from "./Components/receipt";

export default function Home() {
  const [order, setOrder] = useState(null);

  return (
    <div className="bg-[#4A392A] h-screen flex justify-between">
      <div className="ml-[130px] pt-[84px] flex flex-col">
        <h1 className="text-[80px] text-[#B5977B] ">Kopi</h1>
        <h1 className="text-[#fff] text-2xl">
          <span className="font-normal">Freshly brewed, just for </span>
          <span className="italic">you.</span>
        </h1>
      </div>
      {/* <p>Your order receipt{JSON.stringify(order)}</p> */}
      <div className="bg-[#9F8E74] w-2/5 m-[60px] p-12 rounded-2xl ">
        {!order ? <OrderForm setOrder={setOrder} /> : <Receipt order={order} />}
      </div>

    </div>
  );
}
