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

export const projects = [
  {
    component: <NotFound />,
    el: "projects-pma",
    url: "/works/philamuseum",
    words: "Philadelphia Museum of Art",
    type: "main",
  },
  {
    component: <NotFound />,
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
    component: <NotFound />,
    el: "projects-tms2web",
    url: "/works/data-flow",
    words: "TMS to Web",
    desc: "Dolor sit amet, consectetur adipiscing elit. Donec non rhoncus arcu. Morbi a commodo tellus, at imperdiet nulla.",
  },
  {
    component: <Fwgs />,
    el: "projects-fwgs",
    url: "/works/fine-wine-and-good-spirits",
    words: "Fine Wine & Good Spirits",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus arcu. Morbi a commodo tellus, at imperdiet nulla.",
  },
  {
    component: <TollBrothers />,
    el: "projects-toll",
    url: "/works/toll-brothers",
    words: "Toll Brothers",
    desc: "A website to explain how their future student housing would accomodate about 1,000 residents in a self-contained neighborhood with an on-site community center full of premium amenities.",
  },
  {
    component: <Amerihealth />,
    el: "projects-amerihealth",
    url: "/works/amerihealth-administrators",
    words: "Amerihealth Administrators",
    desc: "As a UX/UI Designer, I helped create Amerihealth Administrator's new website. Modernizing its look, reorganizing its content, and revisiting its overall architecture and navigation.",
  },
  {
    component: <IndependenceBlueCross />,
    el: "projects-ibx",
    url: "/works/ibx",
    words: "Independence Blue Cross",
    desc: "Inform people of the recent changes in health care, following the new health reforms",
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
