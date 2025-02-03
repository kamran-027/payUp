"use client";
import { Button } from "./button.js";

interface IAppbarProps {
  user: {
    name: string | null;
  };
  OnSignIn: any;
  OnSignOut: any;
}

export const Appbar = ({ user, OnSignIn, OnSignOut }: IAppbarProps) => {
  return (
    <div className="flex justify-between items-center p-5 border-b">
      <div>PayUp</div>
      <div>
        <Button>Hi There</Button>
      </div>
    </div>
  );
};
