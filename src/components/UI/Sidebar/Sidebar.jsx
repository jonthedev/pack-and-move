import { AddItemForm } from "../../Feat/AddItemForm/AddItemForm"
import { ButtonGroup } from "../../Feat/ButtonGroup/ButtonGroup"
import styles from "./Sidebar.module.css"

export const Sidebar = ({ setItems }) => {
  return (
    <div className={styles.sidebar}>
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  )
}
