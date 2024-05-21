import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search2 from "./component/input2/Search";
import { Home } from "./home/Home";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search2 />}></Route>
        
        <Route path="/home/*" element={<Home />}></Route>
        {/* <Route path="/home/notpage/" element={<Input />}></Route> */}
      </Routes> 
    </div>
  );
}

export default App;
