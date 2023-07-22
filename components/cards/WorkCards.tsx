import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Work } from "@/data/work";
const WorkCards = ({
  className,
  workData,
  ...props
}: {
  className?: string;
  workData: Work;
}) => {
  return (
    <Card className={`shadow-none overflow-hidden  ${className}`}>
      <CardContent
        className={`p-4 bg-${workData.tw_color}-${workData.tw_color_weight} flex flex-col h-48 justify-end`}
      >
        {/* bg-orange-500 bg-purple-600 bg-neutral-900 */}
        <p className="text-2xl font-medium text-white">{workData.title}</p>
        <CardDescription className={`text-${workData.tw_color}-50 mt-2`}>
          {/* text-orange-50 text-purple-50 text-neutral-50 */}
          {workData.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 bg-none backdrop-blur-2xl">
        <a
          href={workData.url}
          className="flex gap-2 hover:gap-3 transition-all ease-in-out"
        >
          {workData.footerText}
          <ExternalLink className="w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};
// {
//      id: 1,
//      title: "Campusmonk",
//      description:
//        "An e-Learning platform, helping students to upskill and earn their dream jobs.",
//      footerText: "campusmonk.in",
//      url: "https://campusmonk.in",
//      tw_color: "orange",
//    }
export default WorkCards;
