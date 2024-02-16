import { create } from "zustand"
import { initialItems } from "../lib/consts"

export const useItemStore = create((set) => ({
  items: initialItems,
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    }
    set((state) => ({ items: [...state.items, newItem] }))
  },
  deleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id)
      return { items: [newItems] }
    })
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed }
        }
        return item
      })
      return { items: newItems }
    })
  },
  deleteAllItems: () => {
    set(() => ({ items: [] }))
  },
  resetItemsToInitial: () => {
    set(() => ({ items: initialItems }))
  },
  markAllItemsPacked: () => {
    set((state) => {
      const packedItems = state.items.map((item) => ({ ...item, packed: true }))

      return { items: packedItems }
    })
  },
  markAllItemsUnPacked: () => {
    set((state) => {
      const unPackedItems = state.items.map((item) => ({
        ...item,
        packed: false
      }))
      return { items: unPackedItems }
    })
  }
}))
