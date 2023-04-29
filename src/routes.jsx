import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Transitions from "./Components/Transitions";
import Project from "./Pages/Project";

export const routes = [
  {
    index: true,
    path: "/",
    name: "home",
    element: (
      <Transitions color="watermelon">
        <Home />
      </Transitions>
    ),
  },
  {
    path: "/projects",
    name: "projects",
    element: (
      <Transitions color="persianblue">
        <Projects />
      </Transitions>
    ),
  },
  {
    path: "/projects/:id",
    name: "project",
    element: (
      <Transitions color="dark">
        <Project />
      </Transitions>
    ),
  },
  {
    path: "/about",
    name: "about",
    element: (
      <Transitions color="tomato">
        <About />
      </Transitions>
    ),
  },
  {
    path: "/contact",
    name: "contact",
    element: (
      <Transitions color="goldenyellow">
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
