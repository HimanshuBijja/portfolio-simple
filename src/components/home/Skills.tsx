import Wrapper from '@/lib/Wrappet'
import { IconTypes } from '@/types/IconTypes'
import React from 'react'
import { Button } from '../ui/button'


const skills: IconTypes[] = [
  // Programming Languages
  // { name: "C", icon: "CIcon" },
  // { name: "Java", icon: "JavaIcon" },
  // { name: "JavaScript", icon: "JavaScriptIcon" },
  { name: "React", icon: "ReactIcon" },
  { name: "TypeScript", icon: "TypeScriptIcon" },
  { name: "Next.js", icon: "NextIcon" },
  { name: "TailwindCSS", icon: "TailwindIcon" },
  { name: "Node.js", icon: "NodeIcon" },
  { name: "C++", icon: "CppIcon" },
  { name: "Python", icon: "PythonIcon" },

  // Web Development
  // { name: "HTML", icon: "HtmlIcon" },
  // { name: "CSS", icon: "CssIcon" },
  // { name: "Framer Motion", icon: "FramerIcon" },
  { name: "Figma", icon: "FigmaIcon" },
  // { name: "Express", icon: "ExpressIcon" },
  // { name: "Recoil", icon: "RecoilIcon" },
  // { name: "WebSockets", icon: "WebSocketIcon" },

  // Databases & ORM
  { name: "MongoDB", icon: "MongoIcon" },
  { name: "PostgreSQL", icon: "PostgresIcon" },
  // { name: "MySQL", icon: "MySQLIcon" },
  { name: "Prisma", icon: "PrismaIcon" },

  // Version Control
  { name: "Git", icon: "GitIcon" },
  // { name: "GitHub", icon: "GitHubIcon" },

  // Development & Tools
  // { name: "Vercel", icon: "VercelIcon" },
  // { name: "Google OAuth 2.0", icon: "GoogleOAuthIcon" },
  { name: "NextAuth.js", icon: "NextAuthIcon" },
  // { name: "REST APIs", icon: "ApiIcon" },

  // Projects
];



const Skills = () => {
  return (
    <Wrapper title="Skills">
      <div className='flex flex-wrap gap-1'>

      {skills.map((skill) => (
        <div key={skill.name}>
          <Button variant="outline" >
            <p>{skill.name}</p>
          </Button>
        </div>
      ))}
      </div>
    </Wrapper>
  )
}

export default Skills