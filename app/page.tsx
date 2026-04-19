import { WhoSection } from "./sections/who";
import { ProblemsSection } from "./sections/problems";
import { SolutionsSection } from "./sections/solutions";
import { SkillsSection } from "./sections/skills";
import { ContactSection } from "./sections/contact";

export default function Home() {
  return (
    <>
      <WhoSection />
      <ProblemsSection />
      <SolutionsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
