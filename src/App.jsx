import { HeadingBackground } from "./components/Typography/Heading/HeadingBackground"
import { Footer } from "./components/UI/Footer/Footer"
import { Header } from "./components/UI/Header/Header"
import { ItemList } from "./components/Feat/ItemList/ItemList"
import { Main } from "./components/UI/Main/Main"
import { Sidebar } from "./components/UI/Sidebar/Sidebar"

import { initialItems } from "./lib/consts"
import { useState } from "react"

function App() {
  const [items, setItems] = useState(initialItems)

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    }

    const newItems = [...items, newItem]
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

  return (
    <>
      <HeadingBackground />
      <Main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleDeleteAllItems={handleDeleteAllItems}
          handleResetItemsToInitial={handleResetItemsToInitial}
          handleMarkAllItemsPacked={handleMarkAllItemsPacked}
        />
      </Main>
      <Footer />
    </>
  )
}

export default App
