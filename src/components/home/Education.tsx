import Wrapper from "@/lib/Wrappet";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Education {
  academicStage: string;
  department: string;
  institution: string;
  year: string;
  logo: string;
}

const education: Education[] = [
  {
    academicStage: "Bachelor's Degree",
    department: "Computer Science Engineering",
    institution: "Sreenidhi Institute of Science & Technology",
    year: "2023-2027  (ongoing)",
    logo: "/logo-snist.jpg",
  },
  {
    academicStage: "Intermediate",
    department: "Science",
    institution: "Little Flower Junior College",
    year: "2022-2023",
    logo: "/logo-lfjc.png",
  },
  {
    academicStage: "School",
    department: "",
    institution: "St. Peter's Model School",
    year: "2010 - 2021",
    logo: "/logo-spms.png",
  },
];

const EducationSection = () => {
  return (
    <Wrapper title="Education">
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <Card key={index} className="py-4">
            <CardContent >
              <div className="flex flex-row max-md:flex-col justify-between md:items-center">
                <div className="flex items-center">
                  <div className="relative overflow-hidden rounded-full size-14">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <p>{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">
                      {edu.department}
                    </p>
                  </div>
                </div>
                <p className="max-md:pl-18  text-[0.925rem]">{edu.year}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Wrapper>
  );
};

export default EducationSection;
