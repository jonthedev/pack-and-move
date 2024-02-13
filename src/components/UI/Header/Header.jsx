import styles from "./Header.module.css"
import { Counter } from "../Counter/Counter"
import { Logo } from "../Logo/Logo"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Counter />
    </header>
  )
}
