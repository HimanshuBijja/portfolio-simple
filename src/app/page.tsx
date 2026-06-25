import About from "@/components/home/About";
import EducationSection from "@/components/home/Education";
import GitHubStats from "@/components/home/GitHubStats";
import RecentWork from "@/components/home/RecentWork";
import Skills from "@/components/home/Skills";
import Socials from "@/components/home/Socials";

export default function Home() {
  return (
    <section>
      <About />
      <Socials />
      <RecentWork />
      <GitHubStats />
      <Skills />
      <EducationSection />
    </section>
  );
}
