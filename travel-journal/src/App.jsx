//this css will apply to all components that are imported here
import './App.css'
//Importing our components (custom html tags)
import Header from "./components/Header"
import Entry from "./components/Entry"

function App() {

  return (
    <>
      <Header />
      <Entry />
    </>
  )
}

export default App
