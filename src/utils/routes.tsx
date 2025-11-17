import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/home/page";

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
