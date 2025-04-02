import { Link, useNavigate, useParams } from "react-router";
import { useDelete, UseOne } from "../../services/recipeService";
import { usePageTitle } from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";
import CommentsCreate from "../comments-create/CommentsCreate";
import { useGetComments } from "../../services/commentService";

import './Details.css'

export default function Details() {
    usePageTitle('Recipe Details');
    const navigate = useNavigate()
    const {recipeId} = useParams();
    const { recipe } = UseOne(recipeId);
    const {deleteRecipe} = useDelete();
    const { email, userId } = useAuth();    
    const {comments} = useGetComments(recipeId);    

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
              <Link to={`/recipes/${recipeId}/edit`}><button>Edit</button></Link> 
              <button onClick={deleteRecipeHandler}>Delete</button>
              </>
            )}
            <button>Like</button>
            {/* <p name="likes">Likes: {recipe.likes.length}</p> */}
          </div>
        )}
        {email && (
          <>
          <h2>Add new comment:</h2>
          <CommentsCreate 
                email={email}
                recipeId={recipeId}
                />
          </>
        )}
        <div>
          <p>Comments:</p>
            <ul>
              {comments.length > 0 
              ?  comments.map(comment => <li key={comment._id}>{comment.author}: {comment.comment}</li>)
              : <li>No comments...</li>
              }   
            </ul>
        </div>
    </section>
  );
}