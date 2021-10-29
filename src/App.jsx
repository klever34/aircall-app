import React from "react";
import ReactDOM from "react-dom";
import HeaderImage from "./HeaderImage.jsx";
import Activities from "./screens/Activities.jsx";

const App = () => {
  return (
    <div className="app-container">
      <HeaderImage />
      <Activities />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
