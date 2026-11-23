import React from 'react'

function Card(props) {
  return (
    <div className='card' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1nbHUkNGhFbc8zdOvRkuLlagAieX44YPept41Xdmpw&s=10" alt="" />
      <h1>{props.user}</h1>
      <p>{prop}</p>
    </div>
  )
}

export default Card