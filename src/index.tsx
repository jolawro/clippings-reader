import React from "react";
import ReactDOM from "react-dom";

import { Button } from "./components/Button";

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
