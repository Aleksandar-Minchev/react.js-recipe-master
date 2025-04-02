export default function CommentsCreate({
    onSubmit,
}) {
    return (
        <article className="create-comment">
            <form className="form" action={onSubmit}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}