import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            {/* its important to notice that this here says to="xyz" and not to="/xyz" otherwise it would be an absolute path */}
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
