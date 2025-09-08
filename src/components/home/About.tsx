import Wrapper from "@/lib/Wrappet";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <>
      <Wrapper title="About">
        <p>
          I'm Himanshu Bijja, a software developer based in Hyderabad, India
        </p>{" "}
        <br />
        <p>
          19, building epic stuffs to explore more about{" "}
          <span className="text-chart-2">Python</span> and{" "}
          <span className="text-chart-3">JavaScript</span>
        </p>{" "}
        <br />
        <p>
          tldr; mostly self-taught by shipping things on the internet <br />
          into tech and deep science — things that reshape us <br />
          fascinated by space,s science, and ideas that expand the mind
        </p>
        <Link href="/projects">
          <Button className="mt-8 flex flex-row gap-2">
            Projects
            <ArrowUpRight />
          </Button>
        </Link>
      </Wrapper>
    </>
  );
}

export default About;
