import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
