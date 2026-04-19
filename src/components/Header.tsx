import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contacts, telephoneNumber } from "@/lib/contact/data";

const Header = () => {
  return (
    <header id="начало" className="min-h-screen w-full">
      <div className="absolute inset-0 flex items-center justify-center ">
        <Image
          src="/header.webp"
          className="brightness-[0.6]"
          alt="Haeder"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className=" container max-w-screen-7xl text-white text-center z-10 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-7 lg:pl-20">
          <p className=" uppercase">ВАШАТА ПЕРФЕКТНА ПОЧИВКА</p>
          <h1 className=" text-4xl lg:text-6xl text-center lg:text-left font-semibold">
            Къща за гости „Алма“ – вашият уют в Сопот
          </h1>
          <p className=" text-gray-300 text-center lg:text-left max-w-4xl">
           Модерен комфорт, спокойствие и природа в подножието на Стара планина
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <Link
              href={"tel:"+ telephoneNumber}
              className=" p-4 bg-principal uppercase"
            >
                Резервирай сега
            </Link>
            <div className="uppercase flex justify-center items-center gap-2">
              <Link href={"#настаняване-и-удобства"}>Научете повече</Link>
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