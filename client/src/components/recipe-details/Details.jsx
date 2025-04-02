import { Link, useNavigate, useParams } from "react-router";
import { useDelete, UseOne } from "../../services/recipeService";
import { usePageTitle } from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";

import './Details.css'
import CommentsCreate from "../comments-create/CommentsCreate";
import { useCreateComment } from "../../services/commentService";

export default function Details() {
    usePageTitle('Recipe Details');
    const navigate = useNavigate()
    const {recipeId} = useParams();
    const { recipe } = UseOne(recipeId);
    const {deleteRecipe} = useDelete();
    const {create} = useCreateComment();
    const { email, userId } = useAuth();
    

    const isOwner = userId === recipe._ownerId;

    const deleteRecipeHandler = async () => {
      const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title}?`);

      if (!hasConfirm) {
            return;
      }

      await deleteRecipe(recipeId);

      navigate('/recipes');
    };

    const createComment = async (formData) => {
      const comment = formData.get('comment');
      await create(recipeId, comment);
      navigate(`/recipes/${recipeId}/details`)
    }

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
              <Link to={`/recipes/${recipeId}/edit`}><button>Edit</button></Link> 
              <button onClick={deleteRecipeHandler}>Delete</button>
              </>
            )}
            <button>Like</button>
            {/* <p name="likes">Likes: {recipe.likes.length}</p> */}
          </div>
        )}
        <h2>Add new comment:</h2>
        {email && <CommentsCreate email={email}
                recipeId={recipeId}
                onSubmit={createComment}/>}
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