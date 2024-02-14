import styles from "./Button.module.css"

export const Button = ({ onClick, buttonType, children }) => {
  return (
    <button
      className={
        buttonType === "secondary"
          ? `${styles["btn"]} ${styles["btn--secondary"]}`
          : styles["btn"]
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}
