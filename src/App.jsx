import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import ContentModalProvider from "./Store/Context/ContentModalContext";
import FormModalContext from "./Store/Context/FormModalContext";

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
