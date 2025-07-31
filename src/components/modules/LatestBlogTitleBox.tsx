import Link from "next/link";
import React from "react";

export const LatestBlogTitleBox = () => {
  return (
    <div className="flex items-center justify-between w-[391px] h-20 p-[22px] border border-[#CFD2E3] rounded-32">
      <p>عنوان مقاله ی 1</p>
      <Link
        href="/"
        className="flex-center w-12 h-12  bg-[#ECFAEE] text-success-100 rounded-18"
      >
        <svg className="size-[35px]">
          <use href="#arrow"></use>
        </svg>
      </Link>
    </div>
  );
};
