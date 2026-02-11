import { useEffect } from "react";
import Scene from "./components/Scene";
import { requestNotificationPermission } from "./services/notificationService";

function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </div>
  );
}

export default App;
