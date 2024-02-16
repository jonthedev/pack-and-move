import { createContext, useEffect, useState } from "react"
import { initialItems } from "../lib/consts"

export const ItemsContext = createContext()

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  )

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    }

    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)
  }

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleDeleteAllItems = () => {
    setItems([])
  }

  const handleResetItemsToInitial = () => {
    setItems(initialItems)
  }

  const handleMarkAllItemsPacked = () => {
    const packedItems = items.map((item) => ({ ...item, packed: true }))
    setItems(packedItems)
  }

  const handleMarkAllItemsUnPacked = () => {
    const unPackedItems = items.map((item) => ({ ...item, packed: false }))
    setItems(unPackedItems)
  }

  const totalNumberOfItems = items.length

  const numberOfItemsPacked = items.filter(
    (item) => item.packed === true
  ).length

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleToggleItem,
        handleDeleteItem,
        handleDeleteAllItems,
        handleResetItemsToInitial,
        handleMarkAllItemsPacked,
        handleMarkAllItemsUnPacked,
        totalNumberOfItems,
        numberOfItemsPacked
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
