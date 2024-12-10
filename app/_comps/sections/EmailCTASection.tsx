import { Button } from "@/components/ui/button";

type Props = {};

const EmailCTASection = (props: Props) => {
  return (
    <section className="flex w-full  justify-center items-center flex-col gap-8 md:gap-8 py-36">
      <h3 className="text-xl md:text-4xl text-center leading-relaxed font-medium">
        {`Have a Project in Mind? Let's Talk About It`}
      </h3>
      <div className="flex w-full items-center flex-wrap justify-center gap-4">
        <Button size={"lg"} className="w-fit">
          Say Hello
        </Button>
      </div>
    </section>
  );
};

export default EmailCTASection;
