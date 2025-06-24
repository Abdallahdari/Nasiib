import BoxScene from "@/app/_components/Example";
import Hero from "./_components/Hero";
import Steps from "./_components/main";
import PropertyCards from "./_components/projects";
import Subhero from "./_components/subher";
import Testimonials from "./_components/test";

export default function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <PropertyCards />
      <Testimonials />
      <Subhero />
      {/* <BoxScene /> */}
    </div>
  );
}
