import { RouterProvider } from "react-router-dom";
import AppProvider from "./components/providers/GlobalStylesProvider";
import { router } from "./routes";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
