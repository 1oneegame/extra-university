import AboutUniversity from "@/components/AboutUniversity";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Professors from "@/components/Professors";
import UniversityIntroduce from "@/components/UniversityIntroduce";
import UniversityPrograms from "@/components/UniversityPrograms";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUniversity/>
      <News/>
      <UniversityIntroduce/>
      <UniversityPrograms/>
      <Professors/>
    </>
  );
}
