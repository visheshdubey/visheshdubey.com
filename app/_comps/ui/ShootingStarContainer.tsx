import ShootingStars from "@/app/_comps/ui/ShootingStars";
import { shootingStar } from "@/data/shooting-star";
import React from "react";

type Props = {};

const ShootingStarContainer = (props: Props) => {
  return (
    <div className="absolute max-w-5xl w-screen h-[90vh] -z-20 overflow-hidden">
      {shootingStar.map((data, index) => (
        <ShootingStars key={index} initial={data.initial} animate={data.animate} repeatDelay={data.repeatDelay} />
      ))}
    </div>
  );
};

export default ShootingStarContainer;
