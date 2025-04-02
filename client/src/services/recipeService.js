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
        const searchParams = new URLSearchParams({
            select: '_id,imageUrl,title,description',
        });
        requester(`${baseUrl}?${searchParams.toString()}`, null, 'GET')
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

export const UseGetLatest = () => {

    const [latestRecipes, setLatestRecipes] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 4,
            select: '_id,imageUrl,title,description',
        });
        requester(`${baseUrl}?${searchParams.toString()}`, null, 'GET')
            .then(setLatestRecipes);
    }, [])

    return { latestRecipes };
};

export const useDelete = () => {
    const deleteRecipe = (recipeId) =>
        requester(`${baseUrl}/${recipeId}`, null, 'DELETE');

    return {
        deleteRecipe
    }
};

export const useEdit = () => {
    const edit = (recipeId, recipeData) =>
        requester(`${baseUrl}/${recipeId}`, { ...recipeData, _id: recipeId }, 'PUT');

    return {
        edit
    }
};