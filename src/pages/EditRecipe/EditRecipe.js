import React from "react";
import { Redirect } from "react-router-dom";
import RecipeService from "../../services/recipe.service";
// import { withAuth } from '../../context/auth.context';

//front validator MUST be equal to back validators
const validators = {
  dishName: (value) => {
    let message;
    if (!value) {
      message = "Dish name is required";
    }
    return message;
  },

  ingredients: (value) => {
    let message;
    if (!value) {
      message = "Ingredients are required";
    }
    return message;
  },

  prepTime: (value) => {
    let message;
    if (!value) {
      message = "Prep time is required";
    }
    return message;
  },

  preparation: (value) => {
    let message;
    if (!value) {
      message = "Preparation is required";
    }
    return message;
  },

  howToCook: (value) => {
    let message;
    if (!value) {
      message = "How to cook is required";
    }
    return message;
  },

  cousine: (value) => {
    let message;
    if (!value) {
      message = "Cousine time is required";
    }
    return message;
  },

  type: (value) => {
    let message;
    if (!value) {
      message = "Type time is required";
    }
    return message;
  },

  servings: (value) => {
    let message;
    if (!value) {
      message = "Servings are required";
    }
    return message;
  },
};

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        dishName: "",
        cousine: "",
        type: "",
        image: "",
        ingredients: "",
        prepTime: "",
        preparation: "",
        howToCook: "",
        servings: "",
      },
      redirect: false,
      errors: {
        dishName: null,
        cousine: null,
        type: null,
        image: null,
        ingredients: null,
        prepTime: null,
        preparation: null,
        howToCook: null,
        servings: null,
      },
    };
    // connection with RecipeService to be able to use all it services
    // recipe.service.js is the bridge to connect frontend with backend
    this.recipeService = new RecipeService();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.recipeService.getOne(id).then((res) => {
      console.log(res);
      this.setState({ fields: { ...res.data } });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      const id = this.props.match.params.id;
      const uploadData = this.state.fields;
      this.recipeService
        .updateOne(id, uploadData)
        .then(() => {
          console.log("updated");
        })
        .catch((err) => console.log(err));
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  isValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some((key) => errors[key]);
  }

  render() {
    const { fields, errors, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="m-6">
        <div className="flex mx-auto flex-col shadow-2xl rounded-lg max-w-5xl p-3 sm:p-6">
          <form
            className="space-y-4"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <div className="flex flex-col">
              <label className="labels" htmlFor="dishName">
                Dish Name:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="dishName"
                value={fields.dishName}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.dishName && (
                <p className="errorInputs sm:text-md">{errors.dishName}</p>
              )}
            </div>

            <div className="flex justify-between space-x-2">
              <div className="flex flex-col">
                <label className="labels" htmlFor="dishName">
                  Cousine:
                </label>
                <input
                  className="inputs sm:text-md"
                  type="text"
                  name="cousine"
                  value={fields.cousine}
                  onChange={(event) => this.handleChange(event)}
                />
                {errors.cousine && (
                  <p className="errorInputs sm:text-md">{errors.dishName}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="labels" htmlFor="dishName">
                  Type:
                </label>
                <input
                  className="inputs sm:text-md"
                  type="text"
                  name="type"
                  value={fields.type}
                  onChange={(event) => this.handleChange(event)}
                />
                {errors.type && (
                  <p className="errorInputs sm:text-md">{errors.dishName}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="labels" htmlFor="dishName">
                  Prep Time:
                </label>
                <input
                  className="inputs sm:text-md"
                  type="text"
                  name="prepTime"
                  value={fields.prepTime}
                  onChange={(event) => this.handleChange(event)}
                />
                {errors.prepTime && (
                  <p className="errorInputs sm:text-md">{errors.dishName}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="labels" htmlFor="dishName">
                  Servings:
                </label>
                <input
                  className="inputs sm:text-md"
                  type="number"
                  name="servings"
                  value={fields.servings}
                  onChange={(event) => this.handleChange(event)}
                />
                {errors.servings && (
                  <p className="errorInputs sm:text-md">{errors.dishName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="dishName">
                Image:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="image"
                value={fields.image}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.image && (
                <p className="errorInputs sm:text-md">{errors.dishName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="dishName">
                Ingredients:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="ingredients"
                value={fields.ingredients}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.ingredients && (
                <p className="errorInputs sm:text-md">{errors.dishName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="dishName">
                Preparation:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="preparation"
                value={fields.preparation}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.preparation && (
                <p className="errorInputs sm:text-md">{errors.dishName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="dishName">
                How To Cook:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="howToCook"
                value={fields.howToCook}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.howToCook && (
                <p className="errorInputs sm:text-md">{errors.dishName}</p>
              )}
            </div>

<div className="flex justify-center">
            <button
              className="cursor-pointer shadow-md bg-green-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              disabled={!this.isValid()}
              type="submit"
            >
              Update Recipe
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// export default withAuth(withRouter(EditRecipe));
export default EditRecipe;
