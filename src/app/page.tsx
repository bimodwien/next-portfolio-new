import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import SkillSection from "@/components/skill-section";
import WorkExperienceSection from "@/components/work-experience-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <WorkExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
