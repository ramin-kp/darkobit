import { LatestBlogCard } from "@/components/modules/LatestBlogCard";
import { LatestBlogTitleBox } from "@/components/modules/LatestBlogTitleBox";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LatestBlogs = () => {
  return (
    <section className="bg-[#F9F9F9] dark:bg-dark-300 pt-[71px] pb-[106px] px-[108px]">
      <h3 className="font-peyda font-bold text-2xl text-center">
        آخرین مقالات
      </h3>
      <div className="flex flex-wrap items-start justify-center gap-6 mt-8 px-5 ">
        <div>
          <LatestBlogCard />
          <LatestBlogCard />
        </div>
        <div className="w-[392px] h-[380px] rounded-48 overflow-hidden shrink-0">
          <Link className="relative w-full h-full" href="/">
            <Image
              src={"/images/blog2.png"}
              width={392}
              height={380}
              alt="عکس بلاگ"
              className="w-full h-full object-cover"
            />
            <Image
              src={"/images/img-bg.png"}
              alt="bg-bluer"
              width={392}
              height={380}
              className="absolute bottom-0 left-0 w-full h-full"
            />
            <div className="absolute bottom-0 left-0 flex items-center justify-between w-full text-light  z-40">
              <div>
                <p>مهمترین فایل ها</p>
                <div className="flex items-center gap-1 text-[#747893]">
                  <svg className="size-5">
                    <use href="#clock"></use>
                  </svg>
                  <p>زمان مطالعه : 5 دقیقه</p>
                </div>
              </div>
              <div className=" rounded-full size-[50px] border border-light-200">
                <svg className="size-5">
                  <use href="#arrow"></use>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <LatestBlogTitleBox />
          <LatestBlogTitleBox />
          <LatestBlogTitleBox />
          <LatestBlogTitleBox />
        </div>
      </div>
    </section>
  );
};
