import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/Homepage";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <main id="main-container">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}

export default App;
