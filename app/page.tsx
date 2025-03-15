import Navbar from "@/components/general/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "../components/sections/Projects";
import Client from "@/components/sections/Client";
import Contatct from "@/components/sections/Contatct";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Client />

      <Contatct />
    </main>
  );
}
