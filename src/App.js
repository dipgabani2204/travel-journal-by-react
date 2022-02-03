import './App.css';
import Navbar from "./components/Navbar"
import Main from './components/Main';
import data from "./data"

function App() {

  const data_jsx = data.map(item => {
    return (
      <Main
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Navbar />
      <div>
        {data_jsx}
      </div>
    </div>
  )
}

export default App;
