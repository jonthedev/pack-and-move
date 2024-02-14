import { AddItemForm } from "../../Feat/AddItemForm/AddItemForm"
import { ButtonGroup } from "../../Feat/ButtonGroup/ButtonGroup"
import styles from "./Sidebar.module.css"

export const Sidebar = ({
  handleAddItem,
  handleDeleteAllItems,
  handleResetItemsToInitial
}) => {
  return (
    <div className={styles.sidebar}>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleDeleteAllItems={handleDeleteAllItems}
        handleResetItemsToInitial={handleResetItemsToInitial}
      />
    </div>
  )
}
