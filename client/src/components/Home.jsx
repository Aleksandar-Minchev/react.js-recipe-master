import { usePageTitle } from "../hooks/usePageTitle";
import { UseGetLatest } from "../services/recipeService";
import CatalogItem from "./recipe-catalog/catalog-item/CatalogItem";

export default function Home() {
    usePageTitle('Home Page');

    const { latestRecipes } = UseGetLatest();

    return(
        <>
         <h1>Home Page</h1>
        <p>Check out our amazing latest recipes!</p>
        <section id="home-page">                    
            {latestRecipes.length > 0
                ? (<div className="catalog-items-container">
                    {latestRecipes.map(recipe => (
                  <CatalogItem key={recipe._id} {...recipe} />
                ))}
                    </div>)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
        </>
    );
}