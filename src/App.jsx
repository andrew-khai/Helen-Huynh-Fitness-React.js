import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <main id="main-container">
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
          <Footer />
        </Route>
        <Route>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </main>
  )
}

export default App;
