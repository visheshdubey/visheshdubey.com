import ShootingStarContainer from "./_comps/ui/ShootingStarContainer";
import HeroSection from "./_comps/sections/HeroSection";
import { profileData } from "@/data/content-about";
import WorkSection from "./_comps/sections/WorkSection";
import { workData } from "@/data/content-clients";
import SkillSection from "./_comps/sections/SkillSection";
import ExperienceSection from "./_comps/sections/ExperienceSection";
import { experienceData } from "@/data/content-experience";
import EmailCTASection from "./_comps/sections/EmailCTASection";
import { skillData } from "@/data/content-skills";
import AnimateDiv from "./_comps/animation/Staggered";

export default function Home() {
  return (
    <main className="flex relative min-h-screen h-fit max-w-5xl mx-auto flex-col items-center gap-8 p-8" id="home">
      <ShootingStarContainer />

      <AnimateDiv>
        <HeroSection profileData={profileData} />
      </AnimateDiv>
      {/* <AnimateDiv> */}
      <WorkSection workData={workData} />
      {/* </AnimateDiv> */}
      {/* <AnimateDiv> */}
      <SkillSection skills={skillData} />
      {/* </AnimateDiv> */}
      {/* <AnimateDiv> */}
      <ExperienceSection experiences={experienceData} />
      {/* </AnimateDiv> */}
      {/* <AnimateDiv> */}
      <EmailCTASection />
      {/* </AnimateDiv> */}
    </main>
  );
}
