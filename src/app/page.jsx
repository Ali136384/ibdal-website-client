import Accomplishments from "@/components/Accomplishments";
import CustomersSaied from "@/components/CustomersSaied";
import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import OurServices from "@/components/OurServices";
import WhyOurCompany from "@/components/WhyOurCompany";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyOurCompany />
      <Accomplishments />
      <WhyUs />
      <OurProducts />
      <CustomersSaied />
    </>
  );
}
