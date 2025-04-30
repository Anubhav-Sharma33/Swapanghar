import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";
import LowerNavBar from "../ProjectDetails/LowerNavBAr";
import FormModalContext from "../../../Store/Context/FormModalContext";
import ContentModalProvider from "../../../Store/Context/ContentModalContext";

export default function Root() {
  const data = useLoaderData();
  // console.log(data);

  return (
    <>
      <FormModalContext>
      <ContentModalProvider>
        <header className="sticky top-0 z-30">
          <Navbar data={data} />
        </header>
        <main>
          <Outlet context={data} />
        </main>
        <footer>
          <Footer />
        </footer>
        <LowerNavBar />
        </ContentModalProvider>
      </FormModalContext>
    </>
  );
}
