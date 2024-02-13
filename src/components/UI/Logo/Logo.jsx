import styles from "./Logo.module.css"
import img3Dots from "../../../assets/3dots.png"

export const Logo = () => {
  return <img src={img3Dots} alt="3 dots image" className={styles.logo} />
}
