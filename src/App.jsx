import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";
import Button from "./components/button/Button";
import UniversitiesList from "./components/universities-list/UniversitiesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBox />
      <Button />
      <UniversitiesList />
    </>
  );
}

export default App;
