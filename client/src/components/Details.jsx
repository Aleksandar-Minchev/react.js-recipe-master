import { useNavigate, useParams } from "react-router";
import { useDelete } from "../services/recipeService";


export default function Details() {
    const navigate = useNavigate()
    const {recipeId} = useParams();
    const {deleteRecipe} = useDelete();

    const deleteRecipeHandler = async () => {
    // const hasConfirm = confirm(`Are you sure you want to delete ${game.title} game?`);

    // if (!hasConfirm) {
    //       return;
    // }

    await deleteRecipe(recipeId);

    navigate('/recipes');
    };
    return(
        <>
        <h1>Product Details</h1>
      <p>Here are the details of the selected product:</p>
      <p>Product description goes here...</p>
      <div>
        <button>Edit</button>
        <button onClick={deleteRecipeHandler}>Delete</button>
        <button>Like</button>
      </div>
      <h2>Comments</h2>
      <textarea placeholder="Add your comment here..."></textarea>
      <br />
      <button>Submit Comment</button>
      <div>
        <p>Comments:</p>
        <ul>
          <li>User 1: Great product!</li>
          <li>User 2: I love it!</li>
        </ul>
      </div>
        </>
    );
}