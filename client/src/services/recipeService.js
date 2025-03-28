import { requester } from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/recipeMaster';

export const useCreateRecipe = () => {  

    const create = (recipeData) =>
        requester(baseUrl, recipeData, 'POST');

    return {
        create,
    }
};