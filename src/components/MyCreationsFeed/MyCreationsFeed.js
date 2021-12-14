import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeService from "../../services/recipe.service";
import { withAuth } from "../../context/auth.context";

class MyCreationsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    // connection with RecipeService to be able to use all it services
    // recipe.service.js is the bridge to connect frontend with backend
    this.recipeService = new RecipeService();
  }

  componentDidMount() {
    // get the user in seccion with withAuth user.id
    this.recipeService
      .get()
      .then((res) => {
        console.log(res);
        this.setState({ recipes: res.data });
      })
      .catch((err) => console.error(err));
  }

  //never update state inside render (setState), it causes infinity loop
  displayRecipes() {
    return this.state.recipes.map((recipe) => {
      if (recipe.chef === this.props.user.id) {
        return <RecipeCard key={recipe.id} {...recipe} />;
      }
    });
  }

  render() {
    return (
        <div className="flex flex-wrap justify-between p-1.5">
        {this.displayRecipes()}
    </div>
    )
  }
}

export default withAuth(MyCreationsFeed);
