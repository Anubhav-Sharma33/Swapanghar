import { createBrowserRouter,Outlet} from "react-router-dom";
import CityListing from "../Pages/CityListing/CityListing";
import BuilderListing from "../Pages/BuilderListing/BuilderListing";
import ProjectListing from "../Pages/ProjectListing/ProjectListing";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import { projectLoader } from "../loaders/projectLoader";
import { Suspense, lazy } from "react";
import Root from "../Components/Shared/OtherPages/Root";
import { stateAndProjectByLoader } from "../loaders/stateAndProjectByLoader";
import { cityLoader } from "../loaders/cityLoader";
import { builderLoader } from "../loaders/builderloader";
import { projectListingLoader } from "../loaders/projectsLoader";
import Home from "../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      loader: stateAndProjectByLoader,
      children: [
        {
          index:true,
          element: <Home/>,
        },
        {
          path: "city/:cityName",
          element : <CityListing/>,
          loader:cityLoader
        },
        {
          path: "builder/:builderName",
          element :<BuilderListing/>,
          loader:builderLoader,
        },
        {
          path:"projects",
          element:<ProjectListing/>,
          loader:projectListingLoader
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
      children: [
        {
          index: true,
          loader: projectLoader,
          element: <ProjectDetails />,
        },
      ],
    } 
  ]);