import {
  Navbar,
  Hero,
  About,
  Skills,
  Certifications,
  Projects,
  Contact,
  Footer,
  IdleIndicator,
} from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <IdleIndicator />
    </main>
  );
}
