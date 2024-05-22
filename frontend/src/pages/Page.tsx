import Layout from "@/components/sructure/Layout";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Skills from "./Skills";
import ProjectPage from "./Project/Main";

export default function Page() {
  return (
    <Layout>
      <Home />
      <Services />
      <About />
      <ProjectPage />
      <Skills />
    </Layout>
  );
}
