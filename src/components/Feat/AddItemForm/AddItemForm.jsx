import styles from "./AddItemForm.module.css"
import { Button } from "../Button/Button"
import { useState } from "react"

export const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false
    }
    setItems((prevItems) => [...prevItems, newItem])
  }

  return (
    <form onSubmit={handleSubmit} className={styles["add-item-form"]}>
      <h2>Add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <Button>Add To List</Button>
    </form>
  )
}
