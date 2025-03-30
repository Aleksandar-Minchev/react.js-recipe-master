import { useEffect, useState } from "react";
import { requester } from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/recipeMaster';

export const useCreateRecipe = () => {  

    const create = (recipeData) =>
        requester(baseUrl, recipeData, 'POST');

    return {
        create,
    }
};

export const UseGetAll = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        requester(baseUrl, null, 'GET')
            .then(setRecipes)
    }, []);

    return { recipes };
};

export const UseOne = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        requester(`${baseUrl}/${recipeId}`, null, 'GET')
            .then(setRecipe);
    }, [recipeId])

    return {
        recipe,
    };
};

export const useDelete = () => {
    const deleteRecipe = (recipeId) =>
        requester(`${baseUrl}/${recipeId}`, null, 'DELETE');

    return {
        deleteRecipe
    }
};