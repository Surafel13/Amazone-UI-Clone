import React from 'react'
import './CardProps.css'


function CardProps(props) {
    return (
        <>
            <div className='Main-card-container'>
                <h3>{props.Title}</h3>

                <div className='Image-wrapper row g-3'>
                    <div className='col-6'>
                        <img src={props.ImgUrl1} alt="" />
                        <p>{props.name1}</p>
                    </div>
                    <div className='col-6'>
                        <img src={props.ImgUrl2} alt="" />
                        <p>{props.name2}</p>
                    </div>
                    <div className='col-6'>
                        <img src={props.ImgUrl3} alt="" />
                        <p>{props.name3}</p>
                    </div>
                    <div className='col-6'>
                        <img src={props.ImgUrl4} alt="" />
                        <p>{props.name4}</p>
                    </div>
                </div>

                <a href="#">{props.link}</a>
            </div>
        </>
    )
}

export default CardProps
