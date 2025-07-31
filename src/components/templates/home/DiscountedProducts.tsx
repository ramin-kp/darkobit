import React from "react";
import { DiscountedProductsSlider } from "./DiscountedProductsSlider";
import { DiscountTimerBox } from "./DiscountTimerBox";

export const DiscountedProducts = () => {
  return (
    <section className="sm:container">
      <div className="flex items-center sm:flex-col md:flex-row gap-2 sm:px-1.5 md:mx-0 xl:px-6 bg-discountBG-mobile dark:bg-discountBG-mobile-dark md:bg-discountBG-desktop md:dark:bg-discountBG-desktop-dark bg-cover sm:bg-contain bg-no-repeat bg-center pt-[68px] lg:pt-[107px] pb-16 min-h-[463px]  md:min-h-[300px]">
        <DiscountTimerBox />
        <DiscountedProductsSlider />
      </div>
    </section>
  );
};
