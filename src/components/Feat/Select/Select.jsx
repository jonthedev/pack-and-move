import { useState } from "react"
import styles from "./Select.module.css"
import Select from "react-select"

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default"
  },
  {
    label: "Sort by packed",
    value: "packed"
  },
  {
    label: "Sort by unpacked",
    value: "unpacked"
  }
]

export const ReactSelect = () => {
  const [sortBy, setSortBy] = useState("default")

  return (
    <section className={styles["sorting"]}>
      <Select
        onChange={(option) => setSortBy(option.value)}
        defaultValue={sortingOptions[0]}
        options={sortingOptions}
      />
    </section>
  )
}
