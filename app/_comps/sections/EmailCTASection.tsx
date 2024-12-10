import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/content-social-links";

type Props = {};

const EmailCTASection = (props: Props) => {
  return (
    <section className="flex w-full  justify-center items-center flex-col gap-8 md:gap-8 py-36">
      <h3 className="text-xl md:text-4xl text-center leading-relaxed font-medium">
        {`Have a Project in Mind? — Let's Talk About It`}
      </h3>
      <div className="flex w-full items-center flex-wrap justify-center gap-4">
        <Link href={socialLinks.email} className={cn(buttonVariants({ variant: "default" }), "w-fit")}>
          Say Hello
        </Link>
      </div>
    </section>
  );
};

export default EmailCTASection;
