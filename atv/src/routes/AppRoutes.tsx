import { BrowserRouter, Route, Routes } from "react-router";
import { Atv1 } from "../pages/Atv1";
import { Atv2 } from "../pages/Atv2";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/atv1" element={<Atv1 />} />
        <Route path="/atv2" element={<Atv2 />} />
      </Routes>
    </BrowserRouter>
  );
}
