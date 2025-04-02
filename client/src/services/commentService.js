import { requester } from "../utils/requester";


const baseUrl = 'http://localhost:3030/data/recipeComments';

export const useCreateComment = () => {
    const create = (recipeId, comment) => {
        const commentData = {
            recipeId,
            comment,
        };

        return requester(baseUrl, commentData, 'POST');
    }
    return {
        create,
    }
}
