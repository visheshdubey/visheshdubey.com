import AnimateDiv from "./_comps/animation/Staggered";
import EmailCTASection from "./_comps/sections/EmailCTASection";
import ExperienceSection from "./_comps/sections/ExperienceSection";
import HeroSection from "./_comps/sections/HeroSection";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/star-background";
import WorkSection from "./_comps/sections/WorkSection";
import { experienceData } from "@/data/content-experience";
import { profileData } from "@/data/content-about";
import { workData } from "@/data/content-clients";

export default function Home() {
  return (
    <main className="relative" id="home">
      <div className="flex z-20 relative max-w-5xl mx-auto flex-col items-center gap-24 lg:gap-36 px-4 lg:px-8">
        <AnimateDiv>
          <HeroSection profileData={profileData} className="mt-16" />
        </AnimateDiv>
        <WorkSection workData={workData} />
        {/* <SkillSection skills={skillData} /> */}
        <ExperienceSection experiences={experienceData} />
        <EmailCTASection />
      </div>
      <ShootingStars className="z-10" />
      <StarsBackground className="z-10" />
    </main>
  );
}
