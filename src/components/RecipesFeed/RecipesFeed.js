import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeService from "../../services/recipe.service";

class RecipesFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    // connection with RecipeService to be able to use all it services
    // recipe.service.js is the bridge to connect frontend with backend
    this.recipeService = new RecipeService();
  }

  refreshState() {
    this.recipeService
      .get()
      .then((res) => {
        this.setState({ recipes: res.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  //never update state inside render (setState), it causes infinity loop
  displayRecipes() {
    return this.state.recipes.map((recipe) => {
      // spreed operator replace name/value from recipe - it is a shortcut
      return (
        <RecipeCard key={recipe.id} {...recipe} refreshState={() => this.refreshState()} />
      );
    });
  }

  render() {
    return (
      <div className="flex flex-wrap justify-between p-1.5">
        {this.state.recipes.length === 0 ? (
          <p className="text-lg font-bold">
            Lets get dirt, start to cook and create your first Recipe
          </p>
        ) : (
          this.displayRecipes()
        )}
      </div>
    );
  }
}

export default RecipesFeed;
