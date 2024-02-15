import { HeadingBackground } from "./components/Typography/Heading/HeadingBackground"
import { Footer } from "./components/UI/Footer/Footer"
import { Header } from "./components/UI/Header/Header"
import { ItemList } from "./components/Feat/ItemList/ItemList"
import { Main } from "./components/UI/Main/Main"
import { Sidebar } from "./components/UI/Sidebar/Sidebar"

import { initialItems } from "./lib/consts"
import { useEffect, useState } from "react"

function App() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"))
  const [items, setItems] = useState(itemsFromLocalStorage || initialItems)

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

  const numberOfItemsPacked = items.filter((item) => item.packed === true)

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <>
      <HeadingBackground />
      <Main>
        <Header
          totalNumberOfItems={items.length}
          numberOfItemsPacked={numberOfItemsPacked.length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleDeleteAllItems={handleDeleteAllItems}
          handleResetItemsToInitial={handleResetItemsToInitial}
          handleMarkAllItemsPacked={handleMarkAllItemsPacked}
          handleMarkAllItemsUnPacked={handleMarkAllItemsUnPacked}
        />
      </Main>
      <Footer />
    </>
  )
}

export default App
