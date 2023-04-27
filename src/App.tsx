import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    invoke("generate_save_file").then(console.log).catch(console.error);
  }, []);

  function handleStartNew() {
    navigate("/mod1");
  }

  return (
    <div className="container">
      <div className="centered">
        <h1 className="t1">Cloud Practioner</h1>
        <h1 className="t2"> Prep Tool</h1>
        <button onClick={handleStartNew} className="button button-start">
          Start New
        </button>
        <button className="button button-continue">Continue</button>
        <button className="button button-quit">Quit</button>
      </div>
    </div>
  );
}

export default App;
