import { Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <AboutIconLink />
    </div>
  );
};

export default App;
