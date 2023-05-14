import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Works from "./Pages/Works";
import Amerihealth from "./Pages/works/Amerihealth";
import Fwgs from "./Pages/works/Fwgs";
import HappierHolidays from "./Pages/works/HappierHolidays";
import IndependenceBlueCross from "./Pages/works/IndependenceBlueCross";
import TollBrothers from "./Pages/works/TollBrothers";
import Waln from "./Pages/works/Waln";
import Transitions from "./Components/Transitions";
import Philamuseum from "./Pages/works/Philamuseum";
import Johnson from "./Pages/works/Johnson";
import TMS2WEB from "./Pages/works/Tms2Web";

export const projects = [
  {
    component: <Philamuseum />,
    el: "projects-pma",
    url: "/works/philamuseum",
    words: "Philadelphia Museum of Art",
    type: "main",
  },
  {
    component: <Johnson />,
    el: "projects-jgj",
    url: "/works/johnson-publication",
    words: "Johnson Publication",
    type: "main",
  },
  {
    component: <Waln />,
    el: "projects-waln",
    url: "/works/waln",
    words: "Waln Interactive",
    type: "main",
  },
  {
    component: <HappierHolidays />,
    el: "projects-hh",
    url: "/works/happier-holidays",
    words: "Happier Holidays",
    type: "main",
  },
  {
    component: <TMS2WEB />,
    el: "projects-tms2web",
    url: "/works/tms-to-web",
    words: "TMS to Web",
    desc: "NodeJS/React application that has significantly streamlined the data flow between our internal collection database system and the website's collection object pages. This project also includes the upload of object images to an image server (IIIF).",
  },
  {
    component: <Fwgs />,
    el: "projects-fwgs",
    url: "/works/fine-wine-and-good-spirits",
    words: "Fine Wine & Good Spirits",
    desc: "In Response to an advertising pitch, I revamped FWGS's homepage using the latest web design techniques. My approach involved repurposing existing content and proposing innovative ways to enhance the overall user experience.",
  },
  {
    component: <TollBrothers />,
    el: "projects-toll",
    url: "/works/toll-brothers",
    words: "Toll Brothers",
    desc: "Designed and developed a website to showcase Penn State's upcoming student housing project. The development would cater to around 1,000 residents and offer a self-contained neighborhood concept, complete with a community center featuring high-end amenities.",
  },
  {
    component: <Amerihealth />,
    el: "projects-amerihealth",
    url: "/works/amerihealth-administrators",
    words: "Amerihealth Administrators",
    desc: "Revamp of Amerihealth Administrator's website. My responsibilities involved modernizing the website's appearance, reorganizing its content, and revisiting its overall architecture and navigation.",
  },
  {
    component: <IndependenceBlueCross />,
    el: "projects-ibx",
    url: "/works/ibx",
    words: "Independence Blue Cross",
    desc: "My involvement in this Independence Blue Cross project centered around educating people about the latest health care changes brought about by recent reforms. As a designer and developer, I was tasked with creating an original experience that featured simple interactions, aesthetically pleasing visuals, and responsiveness.",
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
