import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
    usePageTitle('Home Page');
    return(
        <>
         <h1>HomePage</h1>
        <p>Browse through our amazing collection of products!</p>
        <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        </ul>
        </>
    );
}