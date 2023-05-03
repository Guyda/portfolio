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
        <Projects bg="persianblue" accent="pink" />
      </Transitions>
    ),
  },
  {
    path: "/projects/:id",
    name: "project",
    element: (
      <Transitions>
        <Project />
      </Transitions>
    ),
  },
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
