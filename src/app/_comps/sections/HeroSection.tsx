import CyclingWords from "./CyclingWords";
import Link from "next/link";
import { ProfileData } from "@/data/content-about";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/content-social-links";

type Props = {
  profileData: ProfileData;
  className?: string;
};

const HeroSection = ({ profileData, className }: Props) => {
  const words = ["developer", "engineer", "builder", "dreamer"];

  return (
    <section className={cn(`flex w-full justify-center md:items-center flex-col gap-8`, className)}>
      <div className="flex flex-col items-start md:items-center justify-center gap-4 md:gap-10">
        <CyclingWords
          words={words}
          duration={1500}
          className="text-[52px] sm:text-[90px] md:text-[100px] lg:text-[140px] font-extrabold font-poppins"
        />
        <span className="text-lg/[180%] sm:text-xl/[180%] md:text-xl/[180%] lg:text-2xl/[180%] md:text-center font-normal">
          {profileData.description}
        </span>
      </div>
      <Link href={socialLinks.email} className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-fit")}>
        Say Hello
      </Link>
    </section>
  );
};

export default HeroSection;

{
  /* <div className="flex gap-8 flex-wrap">
        <Avatar className={"z-10 w-32 aspect-square h-fit"}>
          <AvatarImage
            className="dark:grayscale transition-all ease-in-out duration-500"
            src={profileData.avatar.src}
          />
          <AvatarFallback>{profileData.avatar.fallback}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2 justify-center">
          <span className="text-3xl font-medium">{profileData.name}</span>
          <span className="text-muted-foreground">{profileData.title}</span>
        </div>
      </div> */
}
