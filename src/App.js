import "./App.css";
import FullName from "./Component/FullName";
import ProfilePhoto from "./Component/ProfilePhoto";
import Adress from "./Component/Adress";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
