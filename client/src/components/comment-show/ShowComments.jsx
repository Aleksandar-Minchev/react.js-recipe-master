export default function ShowComments({
    comment,
    email
}) {
    const isOwner = email === comment.author;

    const commentEditHandler = () => {
        
    };

    const commentDeleteHandler = () => {
        
    };   
    
    return (
        <li key={comment._id}>
            {comment.author}: {comment.comment}
            {isOwner && 
            <>
                <button 
                className="edit-btn" 
                onClick={() => commentEditHandler(comment._id)}
                aria-label="Edit comment"
                >
                    &#9999; {/* Pencil icon */}
                    </button>
                <button 
                className="remove-btn" 
                onClick={() => commentDeleteHandler(comment._id)}
                aria-label="Remove comment"
                >
                    &#10006; {/* X icon */}
                    </button>
            </>
            }
        </li>
    )
}