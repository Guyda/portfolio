import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import {
  ProjectsLanding,
  IndependenceBlueCross,
  Happierholidays,
  Amerihealth,
} from "./Pages/projects";
import Transitions from "./Components/Transitions";
import Project from "./Pages/project";

export const projects = [
  {
    component: <Project />,
    el: "projects-pma",
    url: "/projects/philamuseum",
    words: "Philadelphia Museum of Art",
  },
  {
    component: <Project />,
    el: "projects-jgj",
    url: "/projects/johnson-publication",
    words: "Johnson Publication",
  },
  {
    component: <Project />,
    el: "projects-waln",
    url: "/projects/waln",
    words: "Waln Exhibit",
  },
  {
    component: <Happierholidays />,
    el: "projects-hh",
    url: "/projects/happier-holidays",
    words: "Happier Holidays",
  },
  {
    component: <Project />,
    el: "projects-fwgs",
    url: "/projects/fine-wine-and-good-spirits",
    words: "Fine Wine & Good Spirits",
  },
  {
    component: <Project />,
    el: "projects-toll",
    url: "/projects/toll-brothers",
    words: "Toll Brothers",
  },
  {
    component: <Amerihealth />,
    el: "projects-amerihealth",
    url: "/projects/amerihealth-administrators",
    words: "Amerihealth Administrators",
  },
  {
    component: <IndependenceBlueCross />,
    el: "projects-ibx",
    url: "/projects/ibx",
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
    path: "/projects",
    name: "projects",
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
