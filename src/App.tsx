import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RootLayout from "./pages/root-layout";
import FormationPage from "./pages/formation/page";
import NotFound from "./pages/404/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate to="formation" replace />} />
          <Route path="formation" element={<FormationPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
