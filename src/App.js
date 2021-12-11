import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
// import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
// import AnounRoute from "./components/Routes/AnounRoute/AnounRoute";
import Signup from "./pages/Signup/Signup";
import EditUser from "./pages/EditUser/EditUser";
// import { withAuth } from './context/auth.context';


function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/create-recipe" component={CreateRecipe} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/edit-user/:id" component={EditUser} />
        <Route exact path="/edit-recipe/:id" component={EditRecipe} />
      </Switch>

      <Footer />
    </div>
  );
}

// export default withAuth(App);
export default App
