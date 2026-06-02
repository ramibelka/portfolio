import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { ScrollProgress } from "./components/ScrollProgress";
import { SmoothScroll } from "./components/SmoothScroll";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
