import { DiscountedProducts } from "@/components/templates/home/DiscountedProducts";
import { HeroSection } from "@/components/templates/home/HeroSection";
import { LatestProducts } from "@/components/templates/home/LatestProducts";
import { ProductCreationPath } from "@/components/templates/home/ProductCreationPath";
import SubscriptionBanner from "@/components/templates/home/SubscriptionBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestProducts />
      <SubscriptionBanner />
      <DiscountedProducts />
      <ProductCreationPath />
    </main>
  );
}
