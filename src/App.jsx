import React from "react";
import Mainroutes from "./Routes/Mainroutes";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="py-10 px-[10%] w-full min-h-screen text-white font-light bg-gray-800">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
