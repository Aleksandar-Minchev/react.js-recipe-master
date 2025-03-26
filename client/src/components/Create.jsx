export default function Create() {
    return(
        <>
        <h1>Create New Recipe</h1>
        <form id='create'>
          <input type="text" name="title" placeholder="Recipe Title" required />
          
          <textarea name="description" placeholder="Description" rows="4" required />
          
          <textarea name="ingredients" placeholder="Ingredients" rows="6" required />
          
          <textarea name="instructions" placeholder="Instructions" rows="8" required />
          
          <input type="url" name="imageUrl" placeholder="Image URL" required />
          
          <button type="submit">Create Recipe</button>
        </form>
    </>
    );
}