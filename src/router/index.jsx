import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/home.jsx";
import Error from "../pages/error.jsx";
import Header from "../components/header.jsx";
import Contact from "../components/contact.jsx";
import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";

const base = import.meta.env.BASE_URL;
export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <DotLoader
          color="white"
          cssOverride={{
            margin: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "0",
            height: "0",
          }}
          speedMultiplier={2}
          size={100}
        />
      ) : (
        <Router basename={base}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
          <Contact />
        </Router>
      )}
    </div>
  );
}

export default App;
