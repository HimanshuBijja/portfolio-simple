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
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
      </svg>
    ),
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
          <Link key={icon.name} href={icon.link as string}>
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
                  className="object-contain p-2 text-foreground"
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
