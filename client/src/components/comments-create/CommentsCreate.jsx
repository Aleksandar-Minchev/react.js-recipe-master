import { useNavigate } from "react-router";
import { useCreateComment } from "../../services/commentService";

export default function CommentsCreate({
    email,
    recipeId
}) {
    const {create} = useCreateComment();
    const navigate = useNavigate();
    const onSubmit = async (formData) => {
        const comment = formData.get('comment');
  
        await create(recipeId, comment, email);
  
        navigate(`/recipes/${recipeId}/details`)
      }

    return (
        <article className="create-comment">
            <form className="form" action={onSubmit}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}