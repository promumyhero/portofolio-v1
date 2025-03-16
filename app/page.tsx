import Navbar from "@/components/general/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "../components/sections/Projects";
import Client from "@/components/sections/Client";
import Footer from "@/components/sections/Footer";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Client />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
