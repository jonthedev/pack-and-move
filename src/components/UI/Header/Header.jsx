import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo"
import { Counter } from "../../Feat/Counter/Counter"
import { useItemStore } from "../../../stores/itemsStore"

export const Header = () => {
  const totalNumberOfItems = useItemStore((state) => state.items.length)

  const numberOfItemsPacked = useItemStore(
    (state) => state.items.filter((item) => item.packed === true).length
  )

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
