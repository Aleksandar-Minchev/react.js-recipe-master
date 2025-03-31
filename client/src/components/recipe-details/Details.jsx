import { useNavigate, useParams } from "react-router";
import { useDelete, UseOne } from "../../services/recipeService";
import { usePageTitle } from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";

import './Details.css'


export default function Details() {
    usePageTitle('Recipe Details');
    const navigate = useNavigate()
    const {recipeId} = useParams();
    const { recipe } = UseOne(recipeId);
    const {deleteRecipe} = useDelete();
    const { email, userId } = useAuth()


    const isOwner = userId === recipe._ownerId;

    const deleteRecipeHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title}?`);

    if (!hasConfirm) {
          return;
    }

    await deleteRecipe(recipeId);

    navigate('/recipes');
    };


    return(
      <section id="recipe-details">
        <h1>Recipe Details</h1>
        <div className="recipe-header">
          <h3 name="title">{recipe.title}</h3>
          <p name="description" >Description: {recipe.description}</p>
          <div className="image-ingredients">
            <img name="imageUrl" src={recipe.imageUrl} />
            <p name="ingredients">Ingredients: {recipe.ingredients}</p>
          </div>
          <p name="instructions" >Instructions: {recipe.instructions}</p>
        </div>
        {email && (
          <div>
            {isOwner && (
              <>
              <button>Edit</button>
              <button onClick={deleteRecipeHandler}>Delete</button>
              </>
            )}
            <button>Like</button>
          </div>
        )}
        <h2>Comments</h2>
        {email && (
          <>
          <textarea placeholder="Add your comment here..."></textarea>
          <button>Submit Comment</button>
          </>
        )}
        <div>
          <p>Comments:</p>
            <ul>
              <li>User 1: Great product!</li>
              <li>User 2: I love it!</li>
            </ul>
        </div>
    </section>
  );
}