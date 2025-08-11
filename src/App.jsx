import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footerSection/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavbarMain from "./components/navBarSection/NavbarMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import SkillsBgImg from "./components/skillsSecton/SkillsBgImg";
import SkillsMain from "./components/skillsSecton/SkillsMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <ExperienceMain />
      <SkillsMain />
      <SkillsBgImg />
      <ProjectMain />
      <AboutMeMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
