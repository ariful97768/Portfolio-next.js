import Projects from "@/components/projects";
import About from "../components/about";
import FloatingCard from "../components/floating-card";
import Introduction from "../components/introduction";
import Skills from "../components/skills";
import FloatingNavbar from "@/components/floating-nav";
import Footer from "./footer";
export default function Main() {
  console.log("Server Main comp");
  return (
    <div className="bg-[#1f1f1f] lg:flex px-5">
      {/* Floating profile Card */}
      <FloatingCard />

      {/* Main Content */}
      <main className="lg:mx-[200px]">
        <div className="lg:ml-40 xl:ml-80">
          <Introduction />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </main>
      <aside>
        <FloatingNavbar />
      </aside>
    </div>
  );
}
