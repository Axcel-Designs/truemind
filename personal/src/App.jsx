import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import Onboarding from "./pages/Onboarding";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import GotoTop from "./components/ui/GotoTop";

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname.startsWith("/signin") ||
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/onboarding");

  return (
    <div className="flex flex-col justify-between min-h-screen w-full ">
      {!hideHeader && <Header />}
      <div className="grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
      <GotoTop />
      <Footer />
    </div>
  );
}

export default App;
