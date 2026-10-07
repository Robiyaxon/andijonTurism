import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search2 from "./component/input2/Search";
import { Home } from "./home/Home";
import AIChat from "./component/AIChat/AIChat";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search2 />} />
        <Route path="/home/*" element={<Home />} />
        {/* <Route path="/home/notpage/" element={<Input />} /> */}
      </Routes>

      {/* Ekran ustida suzuvchi AI Yordamchi */}
      <AIChat />
    </div>
  );
}

export default App;