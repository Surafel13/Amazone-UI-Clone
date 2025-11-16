import React from 'react'
import './CardProps.css'


function SingleImgCard(props) {

  return (
    <>
      <div className='Main-wrapper'>

        <div ><h3 style={{ marginBottom: '15px' }}>{props.Title}</h3></div>

        <div className='Image-wrapper row'>
          <div className='col-6 Single-Img'>
            <img src={props.ImgUrl1} alt="img" />
          </div>
        </div><br />

        <div><a href="#">{props.link}</a></div>
      </div>
    </>
  )
}

export default SingleImgCard
