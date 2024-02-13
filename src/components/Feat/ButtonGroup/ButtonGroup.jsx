import { Button } from "../Button/Button"
import styles from "./ButtonGroup.module.css"
import { secondaryButtons } from "../../../lib/consts"

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
