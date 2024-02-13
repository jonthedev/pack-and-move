import styles from "./Button.module.css"

export const Button = ({ buttonType, children }) => {
  return (
    <button
      className={
        buttonType === "secondary"
          ? `${styles["btn"]} ${styles["btn--secondary"]}`
          : styles["btn"]
      }
    >
      {children}
    </button>
  )
}
