import { UseGetAll } from "../../services/recipeService";
import CatalogItem from "./catalog-item/CatalogItem";

import './catalog.css'


export default function Catalog() {
    const { recipes } = UseGetAll();

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            {recipes.length > 0
                ? (<div className="catalog-items-container">
                    {recipes.map(recipe => (
                  <CatalogItem key={recipe._id} {...recipe} />
                ))}
                    </div>)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}