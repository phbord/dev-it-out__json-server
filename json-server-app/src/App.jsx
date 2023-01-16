import { useState } from 'react'
import axios from 'axios'
import Form from "./components/Form"
import List from "./components/List"

function App() {
  const [data, setData] = useState({})
  const [isOpened, setIsOpened] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()

    setIsOpened(!isOpened)

    return axios
            .get('http://localhost:3004/users')
            .then(res => {
              console.log(res.data)
              setData(res.data)
            })
            .catch(err => console.error(err));
  }
  
  return (
    <div className="container py-4">
      <h1>Liste des noms</h1>
      <button type="submit" 
              className="btn btn-primary mb-3" 
              id="btn-data"
              onClick={(e) => handleClick(e)}>Afficher la liste</button>
      {
        isOpened && data && <List data={data} />
      }

      <h2>Ajouter un nom</h2>
      <Form />
    </div>
  )
}

export default App
