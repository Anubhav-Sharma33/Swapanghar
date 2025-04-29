import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import ContentModalProvider, {
} from "./Store/Context/ContentModalContext";

function App() {
  return (
    <ContentModalProvider>
      <RouterProvider router={router} />
    </ContentModalProvider>
  );
}

export default App;
