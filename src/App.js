import About from "./Components/2AboutPage/About";
import Contact from "./Components/3ContactPage/Contact";
import VideoPage from "./Components/4VideoPage/VideoPage";
import PricePage from "./Components/5PricePage/PricePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageDetails from "./Components/6HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageDetails/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="videopage" element={<VideoPage/>} />
        <Route path="pricepage" element={<PricePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
