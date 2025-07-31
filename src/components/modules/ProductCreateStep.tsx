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
      <div className="flex-center w-[76px] h-[76px] px-3.5 py-[17px] mx-auto bg-light dark:bg-dark-200 rounded-full shadow">
        <Image src={`/images/${icon}.svg`} width={75} height={75} alt={title} />
      </div>
      <p className="h-[43px] mt-2 font-bold text-xl md:text-3x-mines text-[#464255]">
        {id}
      </p>
      <p className="mt-3.5 text-sm md:text-lg font-bold text-[#33323B]">
        {title}
      </p>
      <p className="mt-2.25 text-sm font-light text-[#6F6C7C]">{des} </p>
    </div>
  );
};
