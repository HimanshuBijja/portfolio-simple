import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Eye,
  EyeClosedIcon,
  Github,
  GithubIcon,
  LucideIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tags } from "@/types/LanguageTags";


interface Icon {
  icon: string | LucideIcon;
}

interface Project {
  title: string;
  description: string;
  image: string;
  links: {
    name: string;
    url: string;
    icon?: string | LucideIcon;
  }[];
  tags?: Tags[];
}


const icons: Record<string, Icon> = {
  github: {
    icon: GithubIcon,
  },
  live: {
    icon: ExternalLink,
  },
};




const projects: Project[] = [
  {
    title: "OneStop",
    description: "Description for project 1 Description for project 1Description for project 1Description for project 1",
    image: "/onestop-code.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja/onestop",
      },
      {
        name: "live",
        url: "https://onestop-code.vercel.app/",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", 'TailwindCSS', 'Framer Motion'],
  },
  {
    title: "Kryonex",
    description: "Description for project 2",
    image: "/kryonex.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja/kryonex",
      },
      {
        name: "live",
        url: "https://kryonex-zeta.vercel.app/",
      },
    ],
    tags: []
  },
  {
    title: "The-Rev-Room",
    description: "Description for project 3",
    image: "/the-rev-room.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja/mc-laren",
      },
      {
        name: "live",
        url: "https://the-rev-room.vercel.app/",
      },
    ],
  },
];

const Page = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="pt-0 mt-0 overflow-hidden gap-2">
            <CardContent className="p-0 m-0 rounded-none ">
              <div key={index} className=" w-full aspect-[16/9] relative rounded mx-auto">
                <Image
                  key={index}
                  src={project.image}
                  alt={project.title}
                 fill
                 className="object-cover object-[0_0%]"
                />
              </div>
            </CardContent>
            <CardHeader className="flex items-center justify-between px-4">
              <CardTitle>{project.title}</CardTitle>
              <CardAction>
                <div className="flex gap-2">
                  {project.links.map((link, linkIndex) => {
                    const Icon = icons[link.name]?.icon;
                    return (
                      <Link key={linkIndex} href={link.url}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon">
                              {Icon && <Icon />}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{link.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </Link>
                    );
                  })}
                </div>
              </CardAction>
            </CardHeader>
            <CardContent className="px-4">
              <CardDescription>{project.description}</CardDescription>

            </CardContent>
            <CardFooter className="px-4">
              <div className="flex flex-wrap gap-1">
                {project.tags?.map((tag, tagIndex) => (
                  <Button key={tagIndex} variant="outline" size="sm">
                    {tag}
                  </Button>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Page;
