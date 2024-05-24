import Layout from "@/components/sructure/Layout";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import SkillsPage from "./Skills/page";
import ProjectPage from "./Project-Certificate/Main";
import Footer from "./Footer";

export default function Page() {
  return (
    <Layout>
      <Home />
      <Services />
      <About />
      <ProjectPage />
      <SkillsPage />
      <Footer />
    </Layout>
  );
}
