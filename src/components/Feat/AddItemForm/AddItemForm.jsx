import styles from "./AddItemForm.module.css"
import { Button } from "../Button/Button"
import { useRef, useState } from "react"

export const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("")
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!itemText) {
      alert("Field can not be empty!")
      inputRef.current.focus()
      return
    }

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
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />

      <Button>Add To List</Button>
    </form>
  )
}
