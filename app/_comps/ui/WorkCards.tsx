import Image from "next/image";
import Link from "next/link";
import { Work } from "@/data/content-clients";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WorkCards = ({ className, workData }: { className?: string; workData: Work }) => {
  return (
    <div className={`rounded-xl lg:rounded-2xl shadow-none overflow-hidden ${className}`}>
      <Image
        src={workData.cover_image || ""}
        className="flex grow aspect-video inset-0 z-10 object-cover scale-100 hover:scale-125 ease-in-out duration-300"
        alt=""
        width={720}
        height={720}
      />
      <div className="p-4 lg:p-6 flex flex-col gap-4 items-start bg-none backdrop-blur-2xl">
        <a
          href={workData.url}
          className="flex font-poppins font-medium gap-2 text-xl w-fit hover:gap-3 transition-all ease-in-out"
        >
          {workData.title}
        </a>
        <p className="text-neutral-500">{workData.description}</p>

        <div className="flex flex-wrap gap-2">
          {workData.isClient && (
            <div className="flex items-center justify-center rounded-full backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-2 py-1">
              <p className="text-sm text-primary/90">Client Project</p>
            </div>
          )}
          {workData.techStack.map((tech, index) => (
            <div key={`techstack-${index}`} className="rounded-full border border-secondary px-2 py-1">
              <p className="text-sm text-primary/90">{tech}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-5">
          {workData.url && (
            <Link
              href={workData.url}
              target="_blank"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-fit h-7 rounded-full")}
            >
              Live Link
            </Link>
          )}
          {workData.githubUrl && (
            <Link
              href={workData.githubUrl}
              target="_blank"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-fit h-7 rounded-full")}
            >
              Github
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCards;
