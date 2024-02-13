import { useState } from "react"
import { initialItems } from "../../../lib/consts"
import styles from "./ItemList.module.css"

export const ItemList = () => {
  const [items, setItems] = useState(initialItems)

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  )
}

const Item = ({ item }) => {
  return (
    <li className={styles["item"]}>
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  )
}
