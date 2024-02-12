import styles from "./AddItemForm.module.css"

export const AddItemForm = () => {
  return (
    <form className={styles["add-item-form"]}>
      <h2>Add an item</h2>
      <input type="text" />
      <button className={styles.btn}>Add to list</button>
    </form>
  )
}