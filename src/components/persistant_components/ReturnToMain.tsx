import { useNavigate } from "react-router-dom";
import "./ReturnToMain.css";
import { IconDoorExit } from "@tabler/icons-react";

export default function ReturnToMain() {
  const navigate = useNavigate();
  function handleReturnToMenu() {
    navigate("/");
  }
  return (
    <button onClick={handleReturnToMenu} className="mainmenu">
      <span>
        <IconDoorExit size={24} strokeWidth={2} />
      </span>
    </button>
  );
}
