import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const EmailCTASection = (props: Props) => {
  return (
    <section className="flex w-full  justify-center items-center flex-col gap-8 md:gap-16  py-36">
      <h3 className="text-3xl md:text-5xl text-center leading-relaxed font-medium">
        {`Got an Idea? Let's Make Magic Happen, Together!`}
      </h3>
      <div className="flex w-full items-center flex-wrap justify-center gap-4">
        <Input className="max-w-2xl px-8 h-16 rounded-full" type="email" placeholder="johndoe@example.com" />
        <Button className="h-16 rounded-full w-36 text-lg ">Submit</Button>
      </div>
    </section>
  );
};

export default EmailCTASection;
