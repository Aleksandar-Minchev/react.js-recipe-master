import { Link, useNavigate, useParams } from "react-router";
import { useDelete, UseOne } from "../../services/recipeService";
import { usePageTitle } from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";
import CommentsCreate from "../comments-create/CommentsCreate";
import { useGetComments } from "../../services/commentService";
import ShowComments from "../comment-show/ShowComments";

import './Details.css'
import { toast } from "react-toastify";

export default function Details() {
    usePageTitle('Recipe Details');
    const navigate = useNavigate()
    const { recipeId } = useParams();
    const { recipe } = UseOne(recipeId);
    const { deleteRecipe } = useDelete();
    const { email, userId } = useAuth();
    const { comments, setComments } = useGetComments(recipeId);

    const isOwner = userId === recipe._ownerId;

    const deleteRecipeHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title}?`);

        if (!hasConfirm) {
            return;
        }

        try {
            await deleteRecipe(recipeId);
            navigate('/recipes');
        } catch (err) {
            toast.error(err.message)
        }

    };

    const createCommentHandler = (newComment) => {
        setComments(state => [...state, newComment])
    };

    return (
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
            {isOwner && (
                <div>
                    <Link to={`/recipes/${recipeId}/edit`}><button>Edit</button></Link>
                    <button onClick={deleteRecipeHandler}>Delete</button>
                </div>
            )}
            {email && (
                <>
                    <h2>Add new comment:</h2>
                    <CommentsCreate
                        email={email}
                        recipeId={recipeId}
                        onCreate={createCommentHandler}
                    />
                </>
            )}
            <div>
                {comments.length > 0
                    ? (
                        <>
                            <p>Comments:</p>
                            <ul>
                                {comments.map(comment =>
                                    <ShowComments key={comment._id} comment={comment} email={email} />)}
                            </ul>
                        </>
                    ) : <p>There are no comments for this recipe yet...</p>}
            </div>
        </section>
    );
}