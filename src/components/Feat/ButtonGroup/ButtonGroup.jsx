import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"

export const ButtonGroup = ({
  handleDeleteAllItems,
  handleResetItemsToInitial,
  handleMarkAllItemsPacked,
  handleMarkAllItemsUnPacked
}) => {
  const secondaryButtons = [
    {
      text: "Mark all as packed",
      onClick: handleMarkAllItemsPacked
    },
    {
      text: "Mark all as unpacked",
      onClick: handleMarkAllItemsUnPacked
    },
    {
      text: "Reset to initial",
      onClick: handleResetItemsToInitial
    },
    {
      text: "Remove all items",
      onClick: handleDeleteAllItems
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
