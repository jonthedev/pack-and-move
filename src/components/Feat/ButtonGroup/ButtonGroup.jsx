import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"

export const ButtonGroup = ({ handleDeleteAllItems }) => {
  return (
    <div className={styles["button-group"]}>
      <Button buttonType="secondary" onClick={handleDeleteAllItems}>
        Remove all items
      </Button>
    </div>
  )
}
