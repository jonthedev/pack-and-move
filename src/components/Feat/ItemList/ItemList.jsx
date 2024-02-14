import styles from "./ItemList.module.css"

export const ItemList = ({ items, handleDeleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} onClick={handleDeleteItem} />
      ))}
    </ul>
  )
}

const Item = ({ item, onClick }) => {
  return (
    <li className={styles["item"]}>
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button onClick={() => onClick(item.id)}>❌</button>
    </li>
  )
}
