import {
  Divide,
  GithubIcon,
  LinkedinIcon,
  LucideIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Wrapper from "@/lib/Wrappet";
import { IconTypes } from "@/types/IconTypes";

function Socials() {
  return (
    <Wrapper title="Socials">
      <RenderIcons />
    </Wrapper>
  );
}

const Icons: IconTypes[] = [
  {
    name: "GitHub",
    icon: GithubIcon,
    link: "https://github.com/himanshubijja",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    link: "https://linkedin.com/in/himanshubijja",
  },

  {
    name: "X",
    icon: "XIcon",
    link: "https://x.com/himanshubijja",
  },
  {
    name: "Mail",
    icon: MailIcon,
    link: "mailto:bijjahimanshu05@gmail.com",
  },
];

function RenderIcons() {
  return (
    <>
      <div className="flex gap-2">
        {Icons.map((icon) => (
          <Link key={icon.name} href={icon.link}>
            <Button
              className="relative"
              variant="outline"
              size="icon"
              aria-label={icon.name}
            >
              {typeof icon.icon === "string" ? (
                <Image
                  src={`/${icon.icon}.svg`}
                  alt={`${icon.name} Logo`}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <icon.icon />
              )}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Socials;
