import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ProfileData } from "@/data/content-about";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  profileData: ProfileData;
};

const HeroSection = ({ profileData }: Props) => {
  return (
    <section className="flex w-full justify-center flex-col gap-8 pt-4 md:pt-28">
      <div className="flex gap-8 flex-wrap">
        <Avatar className={"z-10 w-32 aspect-square h-fit"}>
          <AvatarImage
            className="dark:grayscale transition-all ease-in-out duration-500"
            src={profileData.avatar.src}
          />
          <AvatarFallback>{profileData.avatar.fallback}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2 justify-center">
          <span className="text-muted-foreground">Work in progress</span>
          <span className="text-3xl font-medium">{profileData.name}</span>
          <span className="text-muted-foreground">{profileData.title}</span>
        </div>
      </div>
      <span className="text-lg">{profileData.description}</span>
      <div className="flex gap-4">
        {profileData.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <link.icon className={link.className} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
