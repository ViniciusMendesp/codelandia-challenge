import { ReactNode } from "react";
import "tailwindcss/tailwind.css";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full py-10 px-6  md:py-14 md:px-8  xl:pt-20 xl:px-80 flex flex-col gap-10">
      {children}
    </div>
  );
}
