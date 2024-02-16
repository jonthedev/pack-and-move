import { ItemsContext } from "../context/ItemsContextProvider"
import { useContext } from "react"

export const useItemsContext = () => {
  const context = useContext(ItemsContext)

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider"
    )
  }
  return context
}
