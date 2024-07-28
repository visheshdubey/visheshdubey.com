import React from "react";

type Props = {};

const CloudGradient = (props: Props) => {
  return (
    <div className="sticky -z-10 top-0">
      <div className="-top-16 md:-top-32 right-16 md:right-32 absolute h-48 w-1/2 blur-[80px] rounded-full bg-fuchsia-500"></div>
      <div className="-top-16 md:-top-32 left-16 md:left-32 absolute h-48 w-1/2 blur-[80px] rounded-full bg-blue-500"></div>
    </div>
  );
};

export default CloudGradient;
