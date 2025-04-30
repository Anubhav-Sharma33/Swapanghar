import { createBrowserRouter, Outlet } from "react-router-dom";
import BuilderListing from "../Pages/BuilderListing";
import ProjectListing from "../Pages/ProjectListing";
import ProjectDetails from "../Pages/ProjectDetails";
import { projectLoader } from "../loaders/projectLoader";
import { Suspense, lazy } from "react";
import Root from "../Components/Shared/OtherPages/Root";
import { cityLocationAndProjectByLoader } from "../loaders/stateAndProjectByLoader";
import { cityLoader } from "../loaders/cityLoader";
import { builderLoader } from "../loaders/builderloader";
import { projectListingLoader } from "../loaders/projectsLoader";
import Home from "../Pages/Homepage";
import CityListing from "../Pages/CityListing";
import ProjectsPage from "../Pages/ProjectsPage";
import { projects } from "../loaders/projects";
import GlobalError from "../Components/GlobalError";
import NotFound from "../Components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: cityLocationAndProjectByLoader,
    errorElement:<GlobalError/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "city/:cityName",
        element: <CityListing />,
        loader: cityLoader,
      },
      {
        path: "builder/:builderName",
        element: <BuilderListing />,
        loader: builderLoader,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <ProjectsPage/>,
            loader:projects
          },
          {
            path: ":projectType",
            element: <ProjectListing />, 
            loader: projectListingLoader,
          },
        ],
      },
    ],
  },
  {
    path: ":slug",
    element: (
      <Suspense fallback={<div>Loading project...</div>}>
        <Outlet />
      </Suspense>
    ),
    errorElement:<GlobalError/>,
    children: [
      {
        index: true,
        loader: projectLoader,
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "*", // 👈 catch-all route for unmatched URLs// This can be blank or a dummy wrapper
    element: <GlobalError />
  }
]);
