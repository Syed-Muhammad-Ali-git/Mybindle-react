// Centralized routing configuration for the app
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/home/page";

const PagesRoutes = () => {
  // Wrap the whole app with BrowserRouter and declare all routes here
  return (
    <BrowserRouter>
      <Routes>
        {/* Home / landing page route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
