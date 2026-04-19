import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contacts, telephoneNumber } from "@/lib/contact/data";

const Header = () => {
  return (
    <header id="inicio" className="min-h-screen w-full">
      <div className="absolute inset-0 flex items-center justify-center ">
        <Image
          src="/header.jpeg"
          className="brightness-[0.6]"
          alt="Haeder"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className=" container max-w-screen-7xl text-white text-center z-10 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-7 lg:pl-20">
          <p className=" uppercase">ВАШАТА ПЕРФЕКТНА ПОЧИВКА</p>
          <h1 className=" text-4xl lg:text-6xl text-center lg:text-left font-semibold">
            Вила Алма: Уют и лукс в сърцето на природата
          </h1>
          <p className=" text-gray-300 text-center lg:text-left max-w-4xl">
           Вашето спокойствие е наш приоритет. Насладете се на незабравими моменти в модерна обстановка, където комфортът и гостоприемството се срещат, за да ви осигурят пълноценен релакс.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <Link
              href={"tel:"+ telephoneNumber}
              className=" p-4 bg-principal uppercase"
            >
                Резервирай сега
            </Link>
            <div className="uppercase flex justify-center items-center gap-2">
              <Link href={"#nosotros"}>Научете повече</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;