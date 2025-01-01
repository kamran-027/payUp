"use client";
import { Balance } from "./balance";

// import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  // const balance = useBalance();
  return (
    <div className="text-2xl text-red-600">
      Hi There
      <Balance />
      {/* Hi There<span>Balance is {balance}</span> */}
    </div>
  );
}
