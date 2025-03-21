export default function Details() {
    return(
        <>
        <h1>Product Details</h1>
      <p>Here are the details of the selected product:</p>
      <p>Product description goes here...</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
        <button>Like</button>
      </div>
      <h2>Comments</h2>
      <textarea placeholder="Add your comment here..."></textarea>
      <br />
      <button>Submit Comment</button>
      <div>
        <p>Comments:</p>
        <ul>
          <li>User 1: Great product!</li>
          <li>User 2: I love it!</li>
        </ul>
      </div>
        </>
    );
}