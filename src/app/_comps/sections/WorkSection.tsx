import { Clients } from "@/data/content-clients";
import WorkCards from "../ui/WorkCards";
import { cn } from "@/lib/utils";

type Props = {
  workData: Clients;
  className?: string;
};

const WorkSection = ({ workData, className }: Props) => {
  return (
    <section id="work" className={cn(`flex w-full items-center justify-center flex-col gap-8 lg:gap-16`, className)}>
      <h2 className="text-lg tracking-wider text-neutral-400">{workData.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        {workData.works.map((workItem) => (
          <WorkCards key={workItem.id} className="w-full p-0" workData={workItem} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
