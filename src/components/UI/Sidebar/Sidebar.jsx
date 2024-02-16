import { useContext } from "react"
import { AddItemForm } from "../../Feat/AddItemForm/AddItemForm"
import { ButtonGroup } from "../../Feat/ButtonGroup/ButtonGroup"
import styles from "./Sidebar.module.css"
import { ItemsContext } from "../../../context/ItemsContextProvider"

export const Sidebar = () => {
  const { handleAddItem } = useContext(ItemsContext)
  return (
    <div className={styles.sidebar}>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  )
}
