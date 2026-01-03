import React from 'react'
import './CardProps.css'


function SingleImgCard(props) {

  return (
    <>
      <div className='Main-card-container'>
        <h3>{props.Title}</h3>

        <div className='Image-wrapper row'>
          <div className='col-12 Single-Img'>
            <img src={props.ImgUrl1} alt="" />
          </div>
        </div>

        <a href="#">{props.link}</a>
      </div>
    </>
  )
}

export default SingleImgCard
