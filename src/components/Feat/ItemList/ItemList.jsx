import styles from "./ItemList.module.css"

export const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.name}
          item={item}
          onClick={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  )
}

const Item = ({ item, onClick, handleToggleItem }) => {
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
      <button onClick={() => onClick(item.id)}>❌</button>
    </li>
  )
}
