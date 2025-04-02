import { useEffect, useState } from "react";
import { requester } from "../utils/requester";


const baseUrl = 'http://localhost:3030/data/recipeComments';

export const useCreateComment = () => {
    const create = (recipeId, comment, email) => {
        const commentData = {
            recipeId,
            comment,
            author: email
        };

        return requester(baseUrl, commentData, 'POST');
    }
    return {
        create,
    }
};

export const useGetComments = (recipeId) => {
    const [comments, setComments] = useState([]);
    
        useEffect(() => {
            const searchParams = new URLSearchParams({
                where: `recipeId="${recipeId}"`,
                select: '_id,comment,author',
            });
            requester(`${baseUrl}?${searchParams.toString()}`, null, 'GET')
                .then(setComments);
        }, [recipeId])

        return {comments, setComments}
};

export const useDeleteComment = () => {
    const deleteComment = (commentId) =>
        requester(`${baseUrl}/${commentId}`, null, 'DELETE');

    return {
        deleteComment
    }
};

