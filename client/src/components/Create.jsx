import { useNavigate } from "react-router";
import { useCreateRecipe } from "../services/recipeService";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Create() {
    usePageTitle('Create Recipe');
    const navigate = useNavigate();
    const { create } = useCreateRecipe();

    const createRecipe = async (formData) => {
      const recipeData = Object.fromEntries(formData);

      await create(recipeData);

      navigate('/recipes');
  };
    return(
        <>
        <h1>Create New Recipe</h1>
        <form id='create' action={createRecipe}>
          <input type="text" name="title" placeholder="Recipe Title" required />
          
          <input type="url" name="imageUrl" placeholder="Image URL" required />

          <textarea name="description" placeholder="Description" rows="4" required />
          
          <textarea name="ingredients" placeholder="Ingredients" rows="6" required />
          
          <textarea name="instructions" placeholder="Instructions" rows="8" required />          
          
          <button type="submit">Create Recipe</button>
        </form>
    </>
    );
}