import React, { useEffect, useRef } from 'react'
import axios from 'axios'

const Form = () => {
  const nameRef = useRef('')
  const activityRef = useRef('')

  useEffect(() => {}, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = { "name": nameRef.current.value, "activity": activityRef.current.value }

    return axios
            .post('http://localhost:3004/users', data)
            .then((res) => console.log(res))
            .catch((error) => console.log(new Error(error.message)))
    //e.target.reset()
  }
  
  return (
    <>
      <form id="form-create" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <input type="text" 
                  className="form-control" 
                  id="name" 
                  ref={nameRef}
                  placeholder="Nom" />
        </div>
        <div className="mb-3">
          <input type="text" 
                  className="form-control" 
                  id="activity" 
                  ref={activityRef}
                  placeholder="Métier" />
        </div>
        <div className="mb-3">
          <button type="submit" 
                  className="btn btn-secondary" 
                  id="btn-create">Ajouter</button>
        </div>
      </form>
    </>
  )
}

export default Form