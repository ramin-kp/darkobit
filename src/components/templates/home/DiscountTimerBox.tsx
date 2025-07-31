import React from "react";

export const DiscountTimerBox = () => {
  return (
    <>
      <div className="hidden sm:flex relative flex-auto flex-row sm:flex-col md:flow-row justify-center lg:flex-auto w-auto md:w-[360px] lg:w-auto bg-secondary-default dark:bg-[#5D5D5D] rounded-tl-48 rounded-bl-48 rounded-tr-3xl rounded-br-3xl overflow-hidden">
        <p className="mt-[20px] lg:mt-[69px] mx-[59px] font-peyda font-extrabold text-base lg:text-3xl text-light text-center leading-10 ">
          محصــــولات تخـــفیف دار
        </p>
        <div className="relative flex items-center gap-1 pt-2 lg:pt-4 px-[25px] pb-5 lg:pb-9 mx-auto lg:mx-[31px] mt-2.5 bg-light dark:bg-dark-300 text-center rounded-3xl child:font-peyda child:font-semibold child:text-[#393939] overflow-hidden">
          <div className="mt-2 lg:mt-4 dark:text-light">
            <span className="inline-flex items-center justify-center pt-1 size-12 bg-[#226CFF]/10 dark:bg-[#D6D6D6]/10  text-3xl rounded-18 border border-secondary-default dark:border-[#B0B0B0]">
              25
            </span>
            <p className="h-3.5 font-yekanbakh font-light text-xs-mines text-[#081035] dark:text-light">
              ثانیه
            </p>
          </div>
          <span className="font-peyda font-bold text-3xl">:</span>
          <div className="mt-2 lg:mt-4 dark:text-light">
            <span className="inline-flex items-center justify-center pt-1 size-12 bg-[#226CFF]/10 dark:bg-[#D6D6D6]/10  text-3xl rounded-18 border border-secondary-default dark:border-[#B0B0B0]">
              15
            </span>
            <p className="h-3.5 font-yekanbakh font-light text-xs-mines text-[#081035] dark:text-light">
              دقیقه
            </p>
          </div>
          <span className="font-peyda font-bold text-3xl">:</span>
          <div className="mt-2 lg:mt-4 dark:text-light">
            <span className="inline-flex items-center justify-center pt-1 size-12 bg-[#226CFF]/10 dark:bg-[#D6D6D6]/10  text-3xl rounded-18 border border-secondary-default dark:border-[#B0B0B0]">
              08
            </span>
            <p className="h-3.5 font-yekanbakh font-light text-xs-mines text-[#081035] dark:text-light">
              ساعت
            </p>
          </div>
          <div className="absolute -bottom-[32px] left-1/2 -translate-x-1/2 bg-[#393939] dark:bg-[#7F7F7F] w-[140px] h-10 rounded-lg"></div>
        </div>
        <div className="flex-center mt-[15px] lg:mt-[31px] w-full">
          <div className="flex items-center gap-2">
            <div className="cursor-pointer">
              <span className="relative inline-block size-7 bg-light/10 hover:bg-light-30 dark:bg-dark-500 hover:dark:bg-dark-500/70 rounded-full">
                <svg className="absolute -top-0.75 -right-3 size-9 text-light dark:text-light rotate-180">
                  <use href="#arrow-left"></use>
                </svg>
              </span>
            </div>
            <div className="cursor-pointer">
              <span className="relative inline-block size-7 bg-light/10 hover:bg-light-30 dark:bg-dark-500 hover:dark:bg-dark-500/70 rounded-full">
                <svg className="absolute -top-0.75 right-1 size-9 text-light dark:text-light">
                  <use href="#arrow-left"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <svg className="absolute top-0 -right-20 w-[253px] h-[229px] rotate-6">
          <use href="#pattern"></use>
        </svg>
      </div>
      {/* mobile */}
      <div className="inline-block sm:hidden relative bg-secondary-default dark:bg-[#5D5D5D] h-[318px] rounded-tl-28 rounded-bl-28 rounded-tr rounded-br overflow-hidden">
        <p className="mt-[80px] mx-2.5 font-peyda font-extrabold text-base lg:text-3xl text-light text-center ">
          محصــــولات تخـــفیف دار
        </p>
        <div className="relative flex items-center gap-0.5 pt-1 px-1 pb-1 mt-10 ml-2.5 bg-light dark:bg-dark-300 text-center rounded-e-9 child:font-peyda child:font-semibold child:text-[#393939] overflow-hidden">
          <div className="mt-1">
            <span className="inline-flex items-center justify-center size-6 bg-[#226CFF]/10 dark:bg-[#454545] text-xs-mines dark:text-light rounded-full border border-secondary-default dark:border-[#B0B0B0]">
              25
            </span>
            <p className="h-3.5 mt-px font-yekanbakh font-light text-xs-mines text-[#081035] dark:text-light">
              ثانیه
            </p>
          </div>
          <span className="font-peyda font-bold text-sm mb-2">:</span>
          <div className="mt-1">
            <span className="inline-flex items-center justify-center size-6 bg-[#226CFF]/10 dark:bg-[#454545] text-xs-mines dark:text-light rounded-full border border-secondary-default dark:border-[#B0B0B0]">
              15
            </span>
            <p className="h-3.5 mt-px font-yekanbakh font-light text-xs-mines text-[#081035] dark:text-light">
              دقیقه
            </p>
          </div>
          <span className="font-peyda font-bold text-sm mb-2">:</span>
          <div className="mt-1">
            <span className="inline-flex items-center justify-center size-6 bg-[#226CFF]/10 dark:bg-[#454545] text-xs-mines dark:text-light rounded-full border border-secondary-default dark:border-[#B0B0B0]">
              08
            </span>
            <p className="h-3.5 mt-px font-yekanbakh font-light text-xs-mines text-[#081035] dark:text-light">
              ساعت
            </p>
          </div>
        </div>

        <svg className="absolute -top-4 -right-[35px] w-[89px] h-[80px] rotate-6 rounded-full">
          <use href="#pattern-mobile"></use>
        </svg>
      </div>
    </>
  );
};
