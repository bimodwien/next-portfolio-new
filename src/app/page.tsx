import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/project-section";
import SkillSection from "@/components/skill-section";
import WorkExperienceSection from "@/components/work-experience-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#202020]">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="work">
        <WorkExperienceSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
