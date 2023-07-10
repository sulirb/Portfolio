import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/home.jsx";
import Error from "../pages/error.jsx";
import Header from "../components/header.jsx";

const base = import.meta.env.BASE_URL;
export function App() {
  return (
    <Router basename={base}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
