import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"

export const ButtonGroup = () => {
  return (
    <div className={styles["button-group"]}>
      <Button buttonType="secondary">Mark all as complete</Button>
      <Button buttonType="secondary">Mark all as incomplete</Button>
      <Button buttonType="secondary">Reset to initial</Button>
      <Button buttonType="secondary">Remove all items</Button>
    </div>
  )
}
