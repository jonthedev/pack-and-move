import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo"
import { Counter } from "../../Feat/Counter/Counter"
import { useContext } from "react"
import { ItemsContext } from "../../../context/ItemsContextProvider"

export const Header = () => {
  const { totalNumberOfItems, numberOfItemsPacked } = useContext(ItemsContext)

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
