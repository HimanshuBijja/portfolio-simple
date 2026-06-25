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
  GithubIcon,
  LucideIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tags } from "@/types/LanguageTags";
import Wrapper from "@/lib/Wrappet";

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
    title: "Obviously Limited",
    description: "A website to showcase Figma designs and CSS animations.",
    image: "/obviously-limited.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja",
      },
      {
        name: "live",
        url: "https://obviously-limited.vercel.app/",
      },
    ],
    tags: ["React", "CSS", "Figma"],
  },
  {
    title: "Future City Police",
    description:
      "An advanced police commissionerate portal layout showcasing interactive maps, emergency alert systems, incident reporting feeds, and multilingual tools.",
    image: "/future-city.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja",
      },
      {
        name: "live",
        url: "https://furute-city.vercel.app/",
      },
    ],
    tags: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Cloud Community Club",
    description:
      "A community hub for open source collaboration, technical events, internships, and technical development programs for the Cloud Community Club.",
    image: "/cloud-community-club.png",
    links: [
      {
        name: "github",
        url: "https://github.com/C3Snist",
      },
      {
        name: "live",
        url: "https://snist.cloudcommunityclub.tech",
      },
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React"],
  },
  {
    title: "Dilisshious",
    description:
      "A premium e-commerce shopfront for gourmet cookies, dessert jars, and artisan chocolates handcrafted in small batches using clean, natural ingredients.",
    image: "/dilisshious.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja",
      },
      {
        name: "live",
        url: "https://www.dilisshious.in/",
      },
    ],
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Recipe Ideas",
    description:
      "A Recipe finder website that suggests recipes based on the name, ingredients and area. Best for trying out new recipes and cuisines.",
    image: "/recipe-ideas.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja/recipe-ideas",
      },
      {
        name: "live",
        url: "https://recipe-ideas-akz.vercel.app/",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "REST APIs",
      "NextAuth.js",
      "Resend",
      "TailwindCSS",
      "Figma",
    ],
  },
  {
    title: "The-Rev-Room",
    description: "A website to showcase Figma designs and CSS animations.",
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
    tags: ["React", "TailwindCSS", "Figma", "Framer Motion"],
  },
  
  {
    title: "Grilli",
    description:
      "A beautifully immersive and responsive restaurant website showcasing traditional & hygienic food selections, smooth banner sliders, and online booking details.",
    image: "/grilli.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja",
      },
      {
        name: "live",
        url: "https://grilli-website-demo.vercel.app/",
      },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Foodie",
    description:
      "A vibrant food-delivery and burger/pizza restaurant landing page showcasing delicious menus, promotional deals, customer reviews, and reservation modules.",
    image: "/foodie.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja",
      },
      {
        name: "live",
        url: "https://foodie-demo-webx.vercel.app/",
      },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
  },
  
  
  //  {
  //   title: "Kryonex",
  //   description:
  //     "An anonymous messaging app where users can share messages without revealing their identity to registered accounts.",
  //   image: "/kryonex.png",
  //   links: [
  //     {
  //       name: "github",
  //       url: "https://github.com/HimanshuBijja/kryonex",
  //     },
  //     {
  //       name: "live",
  //       url: "https://kryonex-zeta.vercel.app/",
  //     },
  //   ],
  //   tags: [
  //     "Next.js",
  //     "TypeScript",
  //     "MongoDB",
  //     "NextAuth.js",
  //     "Resend",
  //     "TailwindCSS",
  //     "AI Integration",
  //     "Figma",
  //   ],
  // },
  {
    title: "Vidyasetu",
    description:
      "An AI-powered multilingual education platform layout supporting over 22 Indian languages, integrated with specialized learning assistants and progress metrics.",
    image: "/vidyasetu.png",
    links: [
      {
        name: "github",
        url: "https://github.com/HimanshuBijja",
      },
      {
        name: "live",
        url: "https://vidyasetu-himanshu.vercel.app/",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "AI Integration",
      "Chatbot",
    ],
  },
  
  // {
  //   title: "OneStop",
  //   description:
  //     "Tool that consolidates user activity from various competitive programming platforms. Integrated APIs to fetch and display upcoming contests in a single dashboard.",
  //   image: "/onestop-code.png",
  //   links: [
  //     {
  //       name: "github",
  //       url: "https://github.com/HimanshuBijja/onestop",
  //     },
  //     {
  //       name: "live",
  //       url: "https://onestop-code.vercel.app/",
  //     },
  //   ],
  //   tags: ["Next.js", "TailwindCSS", "REST APIs", "Web Scraping", "Figma"],
  // },
];

const RecentWork = () => {
  return (
    <div id="projects">
      <Wrapper title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projects.map((project, index) => (
            <Card key={index} className="pt-0 mt-0 overflow-hidden flex flex-col justify-between">
              <Link href={project.links[1].url} target="_blank">
                <CardContent className="p-0 m-0 rounded-none relative w-full aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-[0_0%]"
                  />
                </CardContent>
              </Link>
              <div className="flex flex-col flex-1">
                <CardHeader className="flex flex-row items-center justify-between px-4 py-3">
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                  <CardAction>
                    <div className="flex gap-2">
                      {project.links.map((link, linkIndex) => {
                        const Icon = icons[link.name]?.icon;
                        return (
                          <Link key={linkIndex} href={link.url} target="_blank">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  {Icon && <Icon className="h-4 w-4" />}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{link.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </Link>
                        );
                      })}
                    </div>
                  </CardAction>
                </CardHeader>
                <CardContent className="px-4 pb-3 flex-grow">
                  <CardDescription className="text-sm text-muted-foreground leading-snug">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default RecentWork;