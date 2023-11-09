import Header from "./components/Header";
import HomePage from "./components/Homepage";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
    </>
  )
}

export default App;
