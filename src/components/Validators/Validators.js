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
  
    image: (value) => {
      let message;
      if (!value) {
        message = "Image is required";
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

  export default validators;