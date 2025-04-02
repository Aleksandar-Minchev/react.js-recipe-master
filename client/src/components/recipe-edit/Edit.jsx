import { Navigate, useNavigate, useParams } from "react-router";
import { usePageTitle } from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";
import { useEdit, UseOne } from "../../services/recipeService";

export default function Edit() {
    usePageTitle('Edit Recipe');
    const navigate = useNavigate();
    const { userId } = useAuth();
    const { recipeId } = useParams();
    const { recipe } = UseOne(recipeId);
    const { edit } = useEdit();


    const editRecipe = async (formData) => {
        const recipeData = Object.fromEntries(formData);

        await edit(recipeId, recipeData);

        navigate(`/recipes/${recipeId}/details`);
    };

    if (recipe._ownerId != undefined) {
        const isOwner = userId === recipe._ownerId;
        if (!isOwner) {
            return <Navigate to="/recipes" />
        }
    }

    return (
        <>
            <h1>Edit Recipe</h1>
            <form id='edit' action={editRecipe}>
                <input type="text" name="title" placeholder="Recipe Title" defaultValue={recipe.title} required />

                <input type="url" name="imageUrl" placeholder="Image URL" defaultValue={recipe.imageUrl} required />

                <textarea name="description" placeholder="Description" rows="4" defaultValue={recipe.description} required />

                <textarea name="ingredients" placeholder="Ingredients" rows="6" defaultValue={recipe.ingredients} required />

                <textarea name="instructions" placeholder="Instructions" rows="8" defaultValue={recipe.instructions} required />

                <button type="submit">Edit Recipe</button>
            </form>
        </>
    );
}