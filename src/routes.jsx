import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import {
  ProjectsLanding,
  IndependenceBlueCross,
  Happierholidays,
  Amerihealth,
  TollBrothers,
  Waln,
  Fwgs,
} from "./Pages/projects";
import Transitions from "./Components/Transitions";
import Project from "./Pages/project";

export const projects = [
  {
    component: <Project />,
    el: "projects-pma",
    url: "/work/philamuseum",
    words: "Philadelphia Museum of Art",
  },
  {
    component: <Project />,
    el: "projects-jgj",
    url: "/work/johnson-publication",
    words: "Johnson Publication",
  },
  {
    component: <Waln />,
    el: "projects-waln",
    url: "/work/waln",
    words: "Waln Interactive",
  },
  {
    component: <Happierholidays />,
    el: "projects-hh",
    url: "/work/happier-holidays",
    words: "Happier Holidays",
  },
  {
    component: <Fwgs />,
    el: "projects-fwgs",
    url: "/work/fine-wine-and-good-spirits",
    words: "Fine Wine & Good Spirits",
  },
  {
    component: <TollBrothers />,
    el: "projects-toll",
    url: "/work/toll-brothers",
    words: "Toll Brothers",
  },
  {
    component: <Amerihealth />,
    el: "projects-amerihealth",
    url: "/work/amerihealth-administrators",
    words: "Amerihealth Administrators",
  },
  {
    component: <IndependenceBlueCross />,
    el: "projects-ibx",
    url: "/work/ibx",
    words: "Independence Blue Cross",
  },
];

const _projects = projects.map((p) => {
  return {
    path: p.url,
    name: p.words,
    element: <Transitions>{p.component}</Transitions>,
  };
});

export const routes = [
  {
    index: true,
    path: "/",
    name: "home",
    element: (
      <Transitions>
        <Home bg="watermelon" accent="goldenyellow" />
      </Transitions>
    ),
  },
  {
    path: "/work",
    name: "work",
    element: (
      <Transitions>
        <ProjectsLanding bg="persianblue" accent="pink" />
      </Transitions>
    ),
  },
  ..._projects,
  {
    path: "/about",
    name: "about",
    element: (
      <Transitions>
        <About bg="daisybush" accent="pearlaqua" />
      </Transitions>
    ),
  },
  {
    path: "/contact",
    name: "contact",
    element: (
      <Transitions>
        <Contact />
      </Transitions>
    ),
  },
  {
    path: "*",
    name: "notfound",
    element: <NotFound />,
  },
];
