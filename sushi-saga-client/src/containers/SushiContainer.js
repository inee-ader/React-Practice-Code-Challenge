import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  let sushiItem = props.display.map(sushi=>(
    <Sushi sushi={sushi} key={sushi.id} eat={props.eat}/>
  ))
  return (
    <Fragment>
      <div className="belt">
        {sushiItem}
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer