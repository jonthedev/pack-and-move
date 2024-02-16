import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo"
import { Counter } from "../../Feat/Counter/Counter"
import { useItemsContext } from "../../../hooks/context"

export const Header = () => {
  const { totalNumberOfItems, numberOfItemsPacked } = useItemsContext()

  return (
    <header className={styles.header}>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  )
}
