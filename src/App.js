import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:id" component={Recipe} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
