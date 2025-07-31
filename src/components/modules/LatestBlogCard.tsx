import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LatestBlogCard = () => {
  return (
    <Link
      href="/"
      className="flex items-start gap-4 mb-5 w-[392px] p-6 rounded-40 border border-[#CFD2E3]"
    >
      <div className="w-[132px] h-[132px] rounded-">
        <Image
          src={"/images/blog1.png"}
          alt="عکس وبلاگ"
          width={132}
          height={132}
          className="w-full h-full"
        />
      </div>
      <div className="pt-2.25 pb-1.25">
        <span className="px-2.25 py-0.5 bg-[#ECFAEE] text-xs text-[#6DA975] rounded-10">
          دسته بندی
        </span>
        <p className="mt-2.5 my-[39px] text-base font-bold text-[#081035] ">
          فروش فایل دیجیتال
        </p>
        <div className="flex items-center gap-1 text-[#747893]">
          <svg className="size-5">
            <use href="#clock"></use>
          </svg>
          <p>زمان مطالعه : 5 دقیقه</p>
        </div>
      </div>
    </Link>
  );
};
