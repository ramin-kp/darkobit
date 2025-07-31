import { Button } from "@/components/ui/button";
import Image from "next/image";

const SubscriptionBanner = () => {
  return (
    <section className="relative overflow-x-hidden my-[100px]">

      <div className="">
        <Image
          alt="circle"
          src="/images/circle.png"
          className="absolute blur-[500px] scale-[70%] -left-[350px] lg:-left-[150px] top-[50px]"
          height={300}
          width={500}
        />
      </div>
      
      <div className="flex flex-col md:flex-row-reverse items-center justify-between px-4">


        <div className="z-10 ml-7 flex flex-col">
          <Image
            alt="person"
            src="/images/person-sm.png"
            className="block lg:hidden"
            height={300}
            width={500}
          />
          <Image
            alt="person"
            src="/images/person-lg.png"
            className="hidden lg:block"
            height={300}
            width={500}
          />
          <div className="relative w-[300px] md:w-[400px] h-[70px] mx-auto ">
            <Image
              alt="txt-bg"
              src="/images/txt-bg.png"
              fill
              className="object-contain"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-black text-center text-lg text-base-mines px-4">
              200+ محصول متنوع در دسته بندی
            </h2>
          </div>
        </div>


        <div className="flex flex-col w-100 justify-center1 mt-[55px] gap-1">
          <h2 className="mx-auto font-peyda font-bold text-[25px]">
            دانلود و اشتراک محصولات دیجیتال در
          </h2>
          <div className="mx-auto w-80 h-14 relative">
            <Image
              src="/images/logo.svg"
              alt="لوگو دارک بیت"
              fill
              className="object-contain"
            />
          </div>

          <div className="px-[10px] ">
            <p className="text-center mt-4  text-base-mines">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>

            <Button className="bg-secondary-default hover:bg-secondary-default/90 rounded-[18px] mt-7 mx-auto px-6 py-6 h-[44px] w-[170px] flex gap-2 items-center">
              مشاهده محصولات
              <svg className="!size-6 shrink-0">
                <use href="#arrow-left"></use>
              </svg>
            </Button>
        </div>

        



      </div>
    </section>
  );
};

export default SubscriptionBanner;
