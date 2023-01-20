import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import UserList from "./components/UserList/UserList";

function App() {
  const [count, setCount] = useState(0);

return (
  <div >
    <Header />
    <div className="pl-44 pr-44">
      <Heading />
      <UserList />
    </div>
  </div>
);}

export default App;
