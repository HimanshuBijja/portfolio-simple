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
    title: "Project 1",
    description: "Description for project 1 Description for project 1Description for project 1Description for project 1",
    image: "/project1.jpg",
    links: [
      {
        name: "github",
        url: "/projects/project1",
      },
      {
        name: "live",
        url: "/projects/project1/live",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", 'TailwindCSS', 'Framer Motion'],
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    image: "/kryonex.jpg",
    links: [
      {
        name: "github",
        url: "/projects/project2",
      },
      {
        name: "live",
        url: "/projects/project2/live",
      },
    ],
    tags: []
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    image: "/project3.jpg",
    links: [
      {
        name: "github",
        url: "/projects/project3",
      },
      {
        name: "live",
        url: "/projects/project3/live",
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
            <CardContent className="p-0 m-0 rounded-none">
              <div key={index} className="border p-4 rounded">
                <Image
                  key={index}
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              </div>
            </CardContent>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>{project.title}</CardTitle>
              <CardAction>
                <div className="flex gap-2">
                  {project.links.map((link, linkIndex) => {
                    const Icon = icons[link.name]?.icon;
                    return (
                      <Link key={linkIndex} href={link.url}>
                        <Tooltip>
                          <TooltipTrigger>
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
            <CardContent>
              <CardDescription>{project.description}</CardDescription>

            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-1 line-clamp-1">
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
