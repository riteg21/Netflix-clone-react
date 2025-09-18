import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { MovieDetails } from "./MovieDetails.jsx";
import { Layout } from "./Layout.jsx";

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
