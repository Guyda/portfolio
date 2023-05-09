import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Works from "./Pages/Works";
import Amerihealth from "./Pages/Amerihealth";
import Fwgs from "./Pages/Fwgs";
import HappierHolidays from "./Pages/HappierHolidays";
import IndependenceBlueCross from "./Pages/IndependenceBlueCross";
import TollBrothers from "./Pages/TollBrothers";
import Waln from "./Pages/Waln";
import Transitions from "./Components/Transitions";

export const projects = [
  {
    component: <NotFound />,
    el: "projects-pma",
    url: "/philamuseum",
    words: "Philadelphia Museum of Art",
  },
  {
    component: <NotFound />,
    el: "projects-jgj",
    url: "/johnson-publication",
    words: "Johnson Publication",
  },
  {
    component: <Waln />,
    el: "projects-waln",
    url: "/waln",
    words: "Waln Interactive",
  },
  {
    component: <HappierHolidays />,
    el: "projects-hh",
    url: "/happier-holidays",
    words: "Happier Holidays",
  },
  {
    component: <Fwgs />,
    el: "projects-fwgs",
    url: "/fine-wine-and-good-spirits",
    words: "Fine Wine & Good Spirits",
  },
  {
    component: <TollBrothers />,
    el: "projects-toll",
    url: "/toll-brothers",
    words: "Toll Brothers",
  },
  {
    component: <Amerihealth />,
    el: "projects-amerihealth",
    url: "/amerihealth-administrators",
    words: "Amerihealth Administrators",
  },
  {
    component: <IndependenceBlueCross />,
    el: "projects-ibx",
    url: "/ibx",
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
        <Works bg="persianblue" accent="pink" />
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
