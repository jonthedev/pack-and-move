import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"

export const ButtonGroup = ({
  handleDeleteAllItems,
  handleResetItemsToInitial,
  handleMarkAllItemsPacked,
  handleMarkAllItemsUnPacked
}) => {
  return (
    <div className={styles["button-group"]}>
      <Button buttonType="secondary" onClick={handleMarkAllItemsPacked}>
        Mark all as packed
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAllItemsUnPacked}>
        Mark all as unpacked
      </Button>
      <Button buttonType="secondary" onClick={handleResetItemsToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleDeleteAllItems}>
        Remove all items
      </Button>
    </div>
  )
}
