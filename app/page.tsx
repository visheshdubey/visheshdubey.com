import ApproachSection from "./_comps/ApproachSection";
import BlogSection from "./_comps/BlogSection";
import ContactSection from "./_comps/ContactSection";
import ExperienceSection from "./_comps/ExperienceSection";
import Hero from "./_comps/Hero";
import ProofBar from "./_comps/ProofBar";
import SignalsSection from "./_comps/SignalsSection";
import SkillsSection from "./_comps/SkillsSection";
import WorkSection from "./_comps/WorkSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <WorkSection />
      <ApproachSection />
      <SignalsSection />
      <BlogSection />
      <ExperienceSection />
      <ContactSection />
      <SkillsSection />
    </main>
  );
}
