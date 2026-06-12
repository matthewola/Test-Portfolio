import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "project/:projectId", Component: ProjectDetail },
      { path: "*", Component: NotFound },
    ],
  },
]);
