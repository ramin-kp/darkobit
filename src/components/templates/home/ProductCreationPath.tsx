import { ProductCreateStep } from "@/components/modules/ProductCreateStep";
import React from "react";
type StepData = {
  id: number;
  title: string;
  des: string;
  icon: string;
};
export const ProductCreationPath = () => {
  const stepData: StepData[] = [
    {
      id: 1,
      title: "ایجاد فروشگاه و ثبت اطلاعات",
      des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      icon: "shop-icon",
    },
    {
      id: 2,
      title: "اضافه کردن محصول",
      des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      icon: "bag",
    },
    {
      id: 3,
      title: "تایید توسط ادمین",
      des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      icon: "done-icon",
    },
    {
      id: 4,
      title: "قرارگیری محصول در سایت",
      des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      icon: "pencel",
    },
  ];
  return (
    <section className="mt-[115px]">
      <div className="mx-[49px] text-center">
        <h3 className="font-peyda font-bold text-3xl">
          مسیر
          <span className="product-creation__title">ایجاد محصول</span>
        </h3>
        <p className="mt-2.5 text-base font-light text-[#33323B]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است{" "}
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[56px] sm:gap-[50px] mx-auto mt-[78px]">
        {stepData.map((item: StepData) => (
          <ProductCreateStep
            key={item.id}
            id={item.id}
            title={item.title}
            des={item.des}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};
