import { useState } from "react";
import SideBar  from "./components/SideBar";
import VideoBox from "./components/VideoBox";
import MapBox   from "./components/MapBox";
import "./styles/main.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SideBar></SideBar>
      <main>
        <VideoBox></VideoBox>
        <MapBox></MapBox>
      </main>
    </div>
  );
}

export default App;
