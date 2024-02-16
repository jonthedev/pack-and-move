import { useItemStore } from "../../../stores/itemsStore"
import { AddItemForm } from "../../Feat/AddItemForm/AddItemForm"
import { ButtonGroup } from "../../Feat/ButtonGroup/ButtonGroup"
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
  const addItem = useItemStore((state) => state.addItem)
  return (
    <div className={styles.sidebar}>
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  )
}
