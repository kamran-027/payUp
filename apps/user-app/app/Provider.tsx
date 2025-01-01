// app/providers.tsx
"use client";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

const RecoilRootWrapper = ({ children }: { children: React.ReactNode }) => <RecoilRoot>{children}</RecoilRoot>;

export const Providers = dynamic(() => Promise.resolve(RecoilRootWrapper), {
  ssr: false,
});
