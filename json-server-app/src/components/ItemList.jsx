import React from 'react'

const ItemList = ({data}) => {
  return (
    <>
      <li className='list-group-item'>
        <b>{data.name}</b> : {data.activity}
      </li>
    </>
  )
}

export default ItemList