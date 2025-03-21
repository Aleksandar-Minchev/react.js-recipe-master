import { Link } from "react-router";

export default function Header() {
    return(
      <>
      <header>
      <nav>
      <ul >
        <li >
          <Link to="/about">
            <button>About</button>
          </Link>
        </li>
        <li >
          <Link to="/contacts">
            <button>Contacts</button>
          </Link>
        </li>
        <li >
          <Link to="/register">
            <button>Register</button>
          </Link>
        </li>
        <li >
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
        <li >
          <Link to="/create">
            <button>Create</button>
          </Link>
        </li>
        <li >
          <button>Logout</button>
        </li>
          </ul>
      </nav>
      </header>
      </>
    );
}