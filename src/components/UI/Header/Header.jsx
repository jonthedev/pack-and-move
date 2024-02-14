import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo"
import { Counter } from "../../Feat/Counter/Counter"

export const Header = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  )
}
