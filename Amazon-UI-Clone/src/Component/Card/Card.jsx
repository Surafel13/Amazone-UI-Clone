import React from 'react'
import CardProps from '../CardProps/CardProps'
import SingleImgCard from '../CardProps/SingleImgCard'
import './Card.css'

import img1 from '../../Img/CardImg/HOL25-Peak_10601_HP_DQC_Gifts-by-Price_under50_V1_1x_186x116._SY116_CB797242024_.jpg'
import img2 from '../../Img/CardImg/HOL25-Peak_10599_HP_DQC_Gifts-by-PriceDeals_V1_1x_186x116._SY116_CB797242024_.jpg'
import img3 from '../../Img/CardImg/HOL25-Peak_10598_HP_DQC_Gifts-by-Price_under25_V1_1x_186x116._SY116_CB797581088_.jpg'
import img4 from '../../Img/CardImg/HOL25-Peak_10595_HP_DQC_Gifts-by-Price_under10_V1_1x_186x116._SY116_CB797242024_.jpg'

import img5 from '../../Img/CardImg/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_1x_186x116._SY116_CB543392481_.jpg'
import img6 from '../../Img/CardImg/HOL24_4481_HS2_DQC_2-2_ShopbyRecipient_For-Her_Nov_1H_1x_186x116._SY116_CB543392481_.jpg'
import img7 from '../../Img/CardImg/HOL24_4482_HS2_DQC_2-2_ShopbyRecipient_For-Kids_Nov_1H_1x_186x116._SY116_CB543392481_.jpg'
import img8 from '../../Img/CardImg/HOL24_4483_HS2_DQC_2-2_ShopbyRecipient_For-Teens_Nov_1H_1x_186x116._SY116_CB543392481_.jpg'

import img9 from '../../Img/CardImg/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg'

function Card() {
  return (
    <div className='Main-Wrapper'>
      <div className='Card-Wrapper'>
        <CardProps
          className=''
          Title={"Shop gifts by price"}
          ImgUrl1={img1}
          name1={"Under 10$"}
          ImgUrl2={img2}
          name2={"Under 25$"}
          ImgUrl3={img3}
          name3={"Under 50$"}
          ImgUrl4={img4}
          name4={"Deals"}
          link={"Discover for more Holiday."} />
      </div>
      <div className='Card-Wrapper'>
        <CardProps
          className=''
          Title={"Shop gifts by price"}
          ImgUrl1={img5}
          name1={"For him"}
          ImgUrl2={img6}
          name2={"For her"}
          ImgUrl3={img7}
          name3={"For kid"}
          ImgUrl4={img8}
          name4={"For teens"}
          link={"Shop all gift"} />
      </div>
      <div className='Card-Wrapper'>
        <SingleImgCard
          className=''
          Title='Get your game on'
          ImgUrl1={img9}
          link='Explore holiday gifts'

        />
      </div>
      <div className='Card-Wrapper'>
        <CardProps
          className=''
          Title={"Shop gifts by price"}
          ImgUrl1={img5}
          name1={"For him"}
          ImgUrl2={img6}
          name2={"For her"}
          ImgUrl3={img7}
          name3={"For kid"}
          ImgUrl4={img8}
          name4={"For teens"}
          link={"Shop all gift"} />
      </div>








    </div>
  )
}

export default Card
