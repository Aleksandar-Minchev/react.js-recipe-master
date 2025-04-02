import { useNavigate } from "react-router";
import { useDeleteComment } from "../../services/commentService";

export default function ShowComments({
    comment,
    email
}) {
    const { deleteComment } = useDeleteComment();
    const navigate = useNavigate();
    const isOwner = email === comment.author;

    const commentDeleteHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete your comment: ${comment.comment}?`);

        if (!hasConfirm) {
            return;
        }
        await deleteComment(comment._id);

        navigate(0);
    };

    return (
        <li key={comment._id}>
            {comment.author}: {comment.comment}
            {isOwner &&
                <button
                    className="remove-btn"
                    onClick={() => commentDeleteHandler(comment._id)}
                    aria-label="Remove comment"
                >
                    &#10006; {/* X icon */}
                </button>
            }
        </li>
    )
}