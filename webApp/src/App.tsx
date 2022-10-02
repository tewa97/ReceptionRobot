import { useState } from "react";
import {SideBar}  from "./components/SideBar";
import {VideoBox} from "./components/VideoBox";
import {MapBox} from "./components/MapBox";

import "./styles/main.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="inset-0 bg-gray-700 h-screen w-screen flex space-x-4">
      <SideBar />
      <main className="bg-gray-800 flex flex-1 gap-8 columns-2xs items-center p-8">
        <VideoBox/>
        <MapBox/>
      </main>
    </div>
  );
}

export default App;
