import React from "react";
import { Redirect, Link } from "react-router-dom";
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
      <div className="title-box">
        <h2 className="title-text">UPDATE MY DISH</h2>
        <div className="field-box">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="">
              <label htmlFor="dishName">Dish name: </label>

              <input
                className=""
                type="text"
                name="dishName"
                value={fields.dishName}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.dishName && (
                <p style={{ color: "red" }}>{errors.dishName}</p>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="cousine">Cousine: </label>
              <input
                className={`${errors.cousine ? "error-input" : ""}`}
                type="text"
                name="cousine"
                value={fields.cousine}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.cousine && (
                <p style={{ color: "red" }}>{errors.cousine}</p>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="type">Type: </label>
              <input
                className={`${errors.type ? "error-input" : ""}`}
                type="text"
                name="type"
                value={fields.type}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
            </div>
            <div className="form-item">
              <label htmlFor="image">Image: </label>
              <input
                className={`${errors.image ? "error-input" : ""}`}
                type="text"
                name="image"
                value={fields.image}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
            </div>

            <div className="form-item">
              <label htmlFor="ingredients">Ingredients: </label>
              <input
                className={`${errors.ingredients ? "error-input" : ""}`}
                type="text"
                name="ingredients"
                value={fields.ingredients}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.ingredients && (
                <p style={{ color: "red" }}>{errors.ingredients}</p>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="prepTime">Prep time: </label>
              <input
                className={`${errors.prepTime ? "error-input" : ""}`}
                type="text"
                name="prepTime"
                value={fields.prepTime}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.prepTime && (
                <p style={{ color: "red" }}>{errors.prepTime}</p>
              )}
            </div>

            <div className="form-item">
              <label htmlFor="preparation">Preparation: </label>
              <input
                className={`${errors.preparation ? "error-input" : ""}`}
                type="text"
                name="preparation"
                value={fields.preparation}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.preparation && (
                <p style={{ color: "red" }}>{errors.preparation}</p>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="howToCook">How to cook: </label>
              <input
                className={`${errors.howToCook ? "error-input" : ""}`}
                type="text"
                name="howToCook"
                value={fields.howToCook}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.howToCook && (
                <p style={{ color: "red" }}>{errors.howToCook}</p>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="servings">Servings: </label>
              <input
                className={`${errors.servings ? "error-input" : ""}`}
                type="text"
                name="servings"
                value={fields.servings}
                onChange={(event) => this.handleChange(event)}
              />
              {errors.servings && (
                <p style={{ color: "red" }}>{errors.servings}</p>
              )}
            </div>
            <button
              className="update-bt"
              disabled={!this.isValid()}
              type="submit"
            >
              Update Recipe
            </button>
          </form>
        </div>
        <Link className="home-bt" to="/recipes">
          Home
        </Link>
      </div>
    );
  }
}

// export default withAuth(withRouter(EditRecipe));
export default EditRecipe;
