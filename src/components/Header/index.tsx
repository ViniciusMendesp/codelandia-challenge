import "tailwindcss/tailwind.css";
import { Input } from "../Input";

type HeaderProps = {};

export function Header({}: HeaderProps) {
  return (
    <header className="bg-dark-20 h-52 w-full py-12 px-6  xl:px-80 flex flex-col items-center gap-8">
      <h1 className="text-2xl  md:text-4xl ">
        <span className="text-brand">Code</span>
        <span className="text-dark-60">lândia</span>
      </h1>
      <Input />
    </header>
  );
}
