import styles from "./EmptyView.module.css"

export default function EmptyView() {
  return (
    <section className={styles["empty-view-state"]}>
      <h3>Empty Packing List</h3>
      <p>Start by adding some items you absolutely {"don't"} want to forget</p>
    </section>
  )
}
