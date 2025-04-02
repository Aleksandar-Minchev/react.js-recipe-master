import { useCreateComment } from "../../services/commentService";

export default function CommentsCreate({
    email,
    recipeId,
    onCreate
}) {
    const {create} = useCreateComment();
    const onSubmit = async (formData) => {
        const comment = formData.get('comment');
  
        const createdComment = await create(recipeId, comment, email);
        onCreate(createdComment);
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