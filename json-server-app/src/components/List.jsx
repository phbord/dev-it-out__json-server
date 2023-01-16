import React, { useState } from 'react'
import ItemList from './ItemList'

const List = ({data}) => {
  return (
    <>
      <ul className="list-group my-5" id="list">
        {
          data && Array.from(data).map(item => (<ItemList data={item} key={item.id} />))
        }
      </ul>
    </>
  )
}

export default List