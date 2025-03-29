import { Link } from 'react-router'

export default function CatalogItem({
    _id,
    imageUrl,
    description,
    title,
}) {
    return (
        <div className="recipes">
            <div className="recipes-info">
                <img src={imageUrl} />
                <h6>{description}</h6>
                <h2>{title}</h2>
                <Link to={`/recipes/${_id}/details`} className="details-button">Details</Link>
            </div>
        </div>
    );
}