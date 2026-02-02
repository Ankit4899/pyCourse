import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonPage from "./pages/LessonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  );
}
