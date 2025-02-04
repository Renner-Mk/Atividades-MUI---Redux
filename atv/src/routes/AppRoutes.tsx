import { BrowserRouter, Route, Routes } from "react-router";
import { Atv1 } from "../pages/Atv1";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/atv1" element={<Atv1 />} />
      </Routes>
    </BrowserRouter>
  );
}
