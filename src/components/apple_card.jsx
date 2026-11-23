import React from 'react'

function A_Card(props) {
  return (
    <div className='main_card' >
        <div className='img' >
            <img src={props.img} alt="" />
        </div>
        <div className='content' >
            <h3>{props.user}</h3>
            <p>{props.p}</p>
        </div>
        <div className='footer' >
            <div className='price'>${props.price}</div>
            <div className='booking'>
                <h4>Book Now</h4>
                <img src="https://img.icons8.com/?size=100&id=J8tbwDdCDmOp&format=png&color=ffffff" alt="" />
            </div>
        </div>
    </div>
  )
}

export default A_Card