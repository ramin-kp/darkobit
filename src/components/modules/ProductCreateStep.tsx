import Image from "next/image";
import React from "react";

type ProductCreateStepProps = {
  id: number;
  title: string;
  des: string;
  icon: string;
};

export const ProductCreateStep = ({
  id,
  title,
  des,
  icon,
}: ProductCreateStepProps) => {
  return (
    <div className="text-center">
      <div className="relative flex-center w-[76px] h-[76px] px-3.5 py-[17px] mx-auto bg-light dark:bg-[#4A4A4A] rounded-full border border-[#F5F5F5] shadow">
        <Image src={`/images/${icon}.svg`} width={75} height={75} alt={title} />
        {id !== 1 && (
          <>
            <svg className="absolute left-1 bottom-4 hidden lg:inline-block w-[320px] xl:w-[400px] h-[80px] xl:h-[100px] -z-10">
              <use href="#dash-line"></use>
            </svg>
            <svg className="absolute -top-[50px] left-[38px] inline-block sm:hidden w-[1px] h-[54px] -z-10">
              <use href="#dash-line-short"></use>
            </svg>
          </>
        )}
      </div>
      <div className="flex flex-row sm:flex-col items-center justify-center  gap-2.75 sm:gap-0 mt-3.5 child:dark:text-light">
        <p className="sm:h-[43px] sm:mt-2 font-bold text-xl md:text-3x-mines text-[#464255]">
          {id}
        </p>
        <p className=" text-sm md:text-lg font-bold text-[#33323B]">{title}</p>
      </div>
      <p className="mt-2.25 text-sm font-light text-[#6F6C7C] dark:text-light-300">
        {des}{" "}
      </p>
    </div>
  );
};
