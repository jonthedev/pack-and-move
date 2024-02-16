import { useItemsContext } from "../../../hooks/context"
import { AddItemForm } from "../../Feat/AddItemForm/AddItemForm"
import { ButtonGroup } from "../../Feat/ButtonGroup/ButtonGroup"
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
  const { handleAddItem } = useItemsContext()
  return (
    <div className={styles.sidebar}>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  )
}
