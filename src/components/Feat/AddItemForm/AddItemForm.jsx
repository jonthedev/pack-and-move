import styles from "./AddItemForm.module.css"
import { Button } from "../Button/Button"

export const AddItemForm = () => {
  return (
    <form className={styles["add-item-form"]}>
      <h2>Add an item</h2>
      <input type="text" />
      <Button>Add To List</Button>
    </form>
  )
}
