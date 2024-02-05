"use client";

import Image from "next/image";
import { useState } from "react";
import "tailwindcss/tailwind.css";

type CardProps = {
  date: string;
  title: string;
  content: string;
};

export function Card({ date, title, content }: CardProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isBorderColored, setIsBorderColored] = useState(false);

  const handleClick = () => {
    setIsFilled((prev) => !prev);
    setIsBorderColored((prev) => !prev);
  };

  return (
    <div
      className={`w-full bg-dark-20 border-2 rounded-lg px-6 py-8 ease-linear duration-100 flex flex-col gap-4 ${
        isBorderColored ? "border-brand" : "border-dark-40"
      }`}
    >
      <div className="flex w-full justify-between">
        <span className="text-brand text-xs md:text-sm xl:text-base">
          {date}
        </span>
        <Image
          src={isFilled ? "/heart-active.svg" : "/heart.svg"}
          alt="Heart Icon"
          className="cursor-pointer"
          width={24}
          height={24}
          onClick={handleClick}
        />
      </div>
      <h2 className="text-xl xl:text-2xl text-dark-60">{title}</h2>
      <p className="text-sm md:text-base xl:text-xl text-dark-60">{content}</p>
    </div>
  );
}
