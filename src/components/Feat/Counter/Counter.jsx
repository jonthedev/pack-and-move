import styles from "./Counter.module.css"

export const Counter = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  console.log(numberOfItemsPacked)
  return (
    <div className={styles.counter}>
      {numberOfItemsPacked} / {totalNumberOfItems} items packed
    </div>
  )
}
