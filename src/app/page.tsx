import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Promo from "@/components/Promo/Promo";
import Referrals from "@/components/Referrals/Referrals";
import Subscriptions from "@/components/Subscriptions/Subscriptions";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Promo />
      <About />
      <Education />
      <Team />
      <Subscriptions />
      <Referrals />
      <Footer />
    </>
  );
}
