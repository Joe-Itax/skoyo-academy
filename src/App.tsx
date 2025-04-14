import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RootLayout from "./pages/root-layout";
import FormationPage from "./pages/formation/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate to="formation" replace />} />
          <Route path="formation" element={<FormationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
