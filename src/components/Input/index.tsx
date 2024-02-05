import Image from "next/image";
import "tailwindcss/tailwind.css";

type InputProps = {};

export function Input({}: InputProps) {
  return (
    <div className="w-full text-sm flex gap-3 bg-dark-30 px-6 py-4 rounded-lg border-dark-40 border-2">
      <Image src="/search.svg" alt="Search Icon" width={16} height={16} />
      <input
        className="bg-transparent outline-none text-dark-60"
        type="text"
        placeholder="Pesquisar no blog"
      />
    </div>
  );
}
