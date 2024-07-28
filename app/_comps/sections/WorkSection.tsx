import { Clients } from "@/data/content-clients";
import React from "react";
import WorkCards from "../ui/WorkCards";

type Props = {
  workData: Clients;
};

const WorkSection = ({ workData }: Props) => {
  return (
    <section id="work" className="flex w-full justify-center flex-col gap-8 pt-28">
      <h2 className="text-3xl font-medium">{workData.title}</h2>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
        {workData.works.map((workItem) => (
          <WorkCards key={workItem.id} className="w-full p-0" workData={workItem} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
