import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"

const secondaryButtons = [
  {
    text: "Mark all as complete"
  },
  {
    text: "Mark all as incomplete"
  },
  {
    text: "Reset to initial"
  },
  {
    text: "Remove all items"
  }
]

export const ButtonGroup = () => {
  return (
    <div className={styles["button-group"]}>
      {secondaryButtons.map(({ text }) => (
        <Button key={text} buttonType="secondary">
          {text}
        </Button>
      ))}
    </div>
  )
}
