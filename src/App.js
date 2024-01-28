import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Photos from "./routes/Photos";
import SowShare from "./routes/SowShare";
import ShelterHive from "./routes/ShelterHive";
import Gatzbys from "./routes/Gatzbys";
import CookBook from "./routes/CookBook";
import Disk from "./components/Disk";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/projects/sowshare" element={<SowShare />} />
        <Route path="/projects/shelterHive" element={<ShelterHive />} />
        <Route path="/projects/gatzbys" element={<Gatzbys />} />
        <Route path="/projects/cookbook" element={<CookBook />} />
        <Route path="/disk" element={<Disk />} />
      </Routes>
    </Router>
  );
}

export default App;
