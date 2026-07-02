import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Nav from "./Nav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Nav />
      <p>cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; copyright 2026 by WorldWise</p>
      </footer>
    </div>
  );
}

export default Sidebar;
