import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <span className={styles.arrow}>&larr;</span>
      <span>Back</span>
    </button>
  );
}

export default ButtonBack;
