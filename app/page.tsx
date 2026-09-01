import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Quiz from "@/components/Quiz";
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
        <Quiz />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
