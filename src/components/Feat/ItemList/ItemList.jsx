import styles from "./ItemList.module.css"
import Select from "react-select"
import EmptyView from "../Empty/EmptyView"
import { useContext, useMemo, useState } from "react"
import { ItemsContext } from "../../../context/ItemsContextProvider"

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default"
  },
  {
    label: "Sort by packed",
    value: "packed"
  },
  {
    label: "Sort by unpacked",
    value: "unpacked"
  }
]

export const ItemList = () => {
  const [sortBy, setSortBy] = useState("default")
  const { items, handleToggleItem, handleDeleteItem } = useContext(ItemsContext)

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy == "packed") {
          return b.packed - a.packed
        }
        if (sortBy == "unpacked") {
          return a.packed - b.packed
        }
        return
      }),
    [items, sortBy]
  )

  return (
    <ul className={styles["item-list"]}>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className={styles["sorting"]}>
          <Select
            onChange={(option) => {
              setSortBy(option.value)
            }}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => (
        <Item
          key={item.name}
          item={item}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  )
}

const Item = ({ item, onToggleItem, onDeleteItem }) => {
  return (
    <li className={styles["item"]}>
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
