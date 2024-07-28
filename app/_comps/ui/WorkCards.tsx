import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Work } from "@/data/content-clients";

const WorkCards = ({ className, workData }: { className?: string; workData: Work }) => {
  return (
    <Card className={`shadow-none overflow-hidden  ${className}`}>
      <CardContent
        className={`bg-${workData.tw_color}-${workData.tw_color_weight} flex flex-col relative h-48 p-0 justify-end`}
      >
        <Image
          src={workData.cover_image || ""}
          className="absolute flex grow inset-0 z-10 scale-110 hover:scale-105 ease-in-out duration-300 object-fill"
          alt=""
          width={720}
          height={720}
        ></Image>
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-start gap-1.5 bg-none backdrop-blur-2xl">
        <a href={workData.url} className="flex gap-2 w-fit hover:gap-3 transition-all ease-in-out">
          {workData.footerText}
          <ExternalLink className="w-4" />
        </a>
        <p className="text-sm text-gray-600">{workData.description}</p>
      </CardFooter>
    </Card>
  );
};

export default WorkCards;
