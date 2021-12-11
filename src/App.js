import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import { Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnounRoute";
import Signup from "./pages/Signup/Signup";
import EditUser from "./pages/EditUser/EditUser";
import { withAuth } from './context/auth.context';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <AnonRoute exact path="/" component={Home} />
        <AnonRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/create-recipe" component={CreateRecipe} />
        <AnonRoute exact path="/recipe/:id" component={Recipe} />
        <PrivateRoute exact path="/edit-user/:id" component={EditUser} />
        <PrivateRoute exact path="/edit-recipe/:id" component={EditRecipe} />
      </Switch>

      <Footer />
    </div>
  );
}

export default withAuth(App);
