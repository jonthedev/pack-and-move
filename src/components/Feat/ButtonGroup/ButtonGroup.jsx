import { useItemStore } from "../../../stores/itemsStore"
import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"

export const ButtonGroup = () => {
  const markAllItemsPacked = useItemStore((state) => state.markAllItemsPacked)
  const markAllItemsUnPacked = useItemStore(
    (state) => state.markAllItemsUnPacked
  )
  const resetItemsToInitial = useItemStore((state) => state.resetItemsToInitial)
  const deleteAllItems = useItemStore((state) => state.deleteAllItems)

  const secondaryButtons = [
    {
      text: "Mark all as packed",
      onClick: markAllItemsPacked
    },
    {
      text: "Mark all as unpacked",
      onClick: markAllItemsUnPacked
    },
    {
      text: "Reset to initial",
      onClick: resetItemsToInitial
    },
    {
      text: "Remove all items",
      onClick: deleteAllItems
    }
  ]

  return (
    <div className={styles["button-group"]}>
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          text={button.text}
          onClick={button.onClick}
          buttonType="secondary"
        >
          {button.text}
        </Button>
      ))}
    </div>
  )
}
