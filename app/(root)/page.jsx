import Image from "next/image";
import Banner from "../ui/banner";
import Developments from "../ui/developments";
import About from "../ui/about";
import Featured from "../ui/featured";
import Featured1 from "../ui/featured1";
import Achievements from "../ui/achievements";
import Featured2 from "../ui/featured2";
import CallToAction from "../ui/cta";
import Footer from "../ui/footer";
import HeaderSection from "../ui/headerSection";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <Banner />
      <Developments />
      <About />
      <Featured />
      <Featured1 />
      <Achievements />
      <Featured2 />
      <CallToAction />
    </>
  );
}
