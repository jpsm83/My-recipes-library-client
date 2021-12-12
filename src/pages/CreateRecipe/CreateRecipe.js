import React from "react";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
// import { withAuth } from '../../context/auth.context';

function CreateRecipe() {

  return (
    <div>
      <RecipeForm />
    </div>
  );
}

// export default withAuth(CreateRecipe)
export default CreateRecipe;
