import Compare from "@/components/Compare";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import FitBlock from "@/components/FitBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Mechanics from "@/components/Mechanics";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Quiz from "@/components/Quiz";
import SevenDays from "@/components/SevenDays";
import StickyCta from "@/components/StickyCta";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Product />
        <Mechanics />
        <CtaBand
          title="Посмотрели, как устроен день?"
          text="Соберите свой стартовый профиль — пять вопросов, меньше двух минут."
        />
        <Quiz />
        <FitBlock />
        <SevenDays />
        <Compare />
        <Faq />
        <CtaBand
          title="Остались сомнения — начните с малого"
          text="Тест ни к чему не обязывает: ответы никуда не отправляются."
        />
        <Team />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
