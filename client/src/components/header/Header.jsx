import { Link } from "react-router";

export default function Header() {
    return(
      <>
      <header>
      <nav>
      <Link id="logo" to="/"><img src="./images/logo.png" alt="img" /></Link>
      <ul >
        <li >
          <Link to="/catalog"><button>Catalog</button></Link>
        </li>
        <li >
          <Link to="/register"><button>Register</button></Link>
        </li>
        <li >
          <Link to="/login"><button>Login</button></Link>
        </li>
        <li >
          <Link to="/create"><button>Create</button></Link>
        </li>
        <li >
          <Link to="/logout"><button>Logout</button></Link>          
        </li>
          </ul>
      </nav>
      </header>
      </>
    );
}