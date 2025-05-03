import Header from "@/components/Header/Header";
import Promo from "@/components/Promo/Promo";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Team from "@/components/Team/Team";
import Subscriptions from "@/components/Subscriptions/Subscriptions";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Promo />
      <About />
      <Education />
      <Team />
      <Subscriptions />
      <Footer />
    </>
  );
}
