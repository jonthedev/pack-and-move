import EmptyView from "../Empty/EmptyView"
import { ReactSelect } from "../Select/Select"
import styles from "./ItemList.module.css"

export const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul className={styles["item-list"]}>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? <ReactSelect /> : null}
      {items.map((item) => (
        <Item
          key={item.name}
          item={item}
          onDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  )
}

const Item = ({ item, onDeleteItem, handleToggleItem }) => {
  return (
    <li className={styles["item"]}>
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
