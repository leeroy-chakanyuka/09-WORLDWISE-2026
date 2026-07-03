import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
