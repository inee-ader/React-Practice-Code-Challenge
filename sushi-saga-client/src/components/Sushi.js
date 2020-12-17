import React, { Fragment } from 'react'

const Sushi = ({sushi, eat}) => {

  return (
    <div className="sushi" >
      <div className="plate" >
        {
            <img src={sushi.img_url} width="100%" onClick={()=> eat(sushi)}/>
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi