import { HeadingBackground } from "./components/Typography/Heading/HeadingBackground"
import { Footer } from "./components/UI/Footer/Footer"
import { Header } from "./components/UI/Header/Header"
import { ItemList } from "./components/Feat/ItemList/ItemList"
import { Main } from "./components/UI/Main/Main"
import { Sidebar } from "./components/UI/Sidebar/Sidebar"

import { initialItems } from "./lib/consts"

function App() {
  return (
    <>
      <HeadingBackground />
      <Main>
        <Header />
        <ItemList items={initialItems} />
        <Sidebar />
      </Main>
      <Footer />
    </>
  )
}

export default App
