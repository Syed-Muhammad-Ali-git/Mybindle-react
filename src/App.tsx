// Root application component that wires up all page routes
import "./App.css";
import PagesRoutes from "./utils/routes.js";

const App = () => {
  // Render all routes defined in the routing configuration
  return <PagesRoutes />;
};

export default App;
