import React from 'react'
import './CardProps.css'


function CardProps(props) {
    return (
        <>
            <div className='Main-wrapper'>

                <div ><h3 style={{marginBottom:'15px'}}>{props.Title}</h3></div>

                <div className='Image-wrapper row'>
                    <div className='col-6'>
                        <img src={props.ImgUrl1} alt="img" />
                        <p>{props.name1}</p>
                    </div>
                    <div className='col-6'>
                        <img src={props.ImgUrl2} alt="img" />
                        <p>{props.name2}</p>
                    </div>
                    <div className='col-6'>
                        <img src={props.ImgUrl3} alt="img" />
                        <p>{props.name3}</p>
                    </div>
                    <div className='col-6' >
                        <img src={props.ImgUrl4} alt="img" />
                        <p>{props.name4}</p>
                    </div>
                </div>

                <div><a href="#">{props.link}</a></div>
            </div>
        </>
    )
}

export default CardProps
