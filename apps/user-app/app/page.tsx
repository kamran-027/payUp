"use client";
import { useBalance } from "@repo/store/useBalance";
import { Appbar } from "@repo/ui/appbar";

export default function Home() {
  // const balance = useBalance();
  return (
    <div>
      <Appbar user={{ name: "Kamran" }} OnSignIn={() => {}} OnSignOut={() => {}} />
    </div>
  );
}
