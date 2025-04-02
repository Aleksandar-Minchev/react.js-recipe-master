import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { useDeleteComment } from "../../services/commentService";

export default function ShowComments({
    comment,
    email
}) {
    const { deleteComment } = useDeleteComment();
    const navigate = useNavigate();
    const isOwner = comment?.author === email;

    const commentDeleteHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete your comment: ${comment.comment}?`);

        if (!hasConfirm) {
            return;
        };

        try {
            await deleteComment(comment._id);    
            navigate(0);            
        } catch (err) {
            toast.error(err.message)
        }
    };

    return (
        <li>
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