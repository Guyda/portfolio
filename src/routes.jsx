import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";

export const routes = [
  {
    index: true,
    path: "/",
    name: "home",
    element: <Home />,
  },
  {
    path: "/projects",
    name: "projects",
    element: <Projects />,
  },
  {
    path: "/about",
    name: "about",
    element: <About />,
  },
  {
    path: "/contact",
    name: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    name: "notfound",
    element: <NotFound />,
  },
];
