import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contactus from "./components/Contactus";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import McqLayout from "./components/McqLayout";
import Subjects from "./components/Subjects";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="skillshowcase" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />

          <Route path="mcq" element={<McqLayout />}>
            <Route path="subjects" element={<Subjects />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
