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

import img10 from '../../Img/CardImg/Bedding_1x._SY116_CB563137408_.jpg'
import img11 from '../../Img/CardImg/CleaningTool_1x._SY116_CB563137408_.jpg'
import img12 from '../../Img/CardImg/HomeDecor_1x._SY116_CB563137408_.jpg'
import img13 from '../../Img/CardImg/HomeStorage_1x._SY116_CB563137408_.jpg'

import img14 from '../../Img/CardImg/HOL25-Peak_10623_HP_DQC_Gifting_Toys_V1_1x_186x116._SY116_CB797242024_.jpg'
import img15 from '../../Img/CardImg/HOL25-Peak_10619_HP_DQC_Gifting_Home-Kitchen_V1_1x_186x116._SY116_CB797281968_.jpg'
import img16 from '../../Img/CardImg/HOL25-Peak_10620_HP_DQC_Gifting_Electronics_V1_1x_186x116._SY116_CB797242024_.jpg'
import img17 from '../../Img/CardImg/HOL25-Peak_10615_HP_DQC_Gifting_FitnessFashion_V1_1x_186x116._SY116_CB797242024_.jpg'

import img18 from '../../Img/CardImg/Fuji_SingleImageCard_1x._SY304_CB797652893_.jpg'


function Card() {
  return (
    <>
      <div className='Card-Grid-Container'>
        <div className='Card-Wrapper'>
          <CardProps
            Title={"Shop gifts by price"}
            ImgUrl1={img1}
            name1={"Under 10$"}
            ImgUrl2={img2}
            name2={"Under 25$"}
            ImgUrl3={img3}
            name3={"Under 50$"}
            ImgUrl4={img4}
            name4={"Deals"}
            link={"Discover more Holiday."} />
        </div>
        <div className='Card-Wrapper'>
          <CardProps
            Title={"Shop gifts by recipient"}
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
            Title='Get your game on'
            ImgUrl1={img9}
            link='Explore holiday gifts'
          />
        </div>
        <div className='Card-Wrapper'>
          <CardProps
            Title={"Shop for your home"}
            ImgUrl1={img11}
            name1={"Cleaning Tools"}
            ImgUrl2={img10}
            name2={"Home Storage"}
            ImgUrl3={img12}
            name3={"Home Decor"}
            ImgUrl4={img13}
            name4={"Bedding"}
            link={"Shop all houseware"} />
        </div>

        <div className='Card-Wrapper'>
          <CardProps
            Title={"Shop gifts by category"}
            ImgUrl1={img14}
            name1={"Toys"}
            ImgUrl2={img15}
            name2={"Home and kitchen"}
            ImgUrl3={img16}
            name3={"Electronics"}
            ImgUrl4={img17}
            name4={"Fitness & Fashion"}
            link={"Shop all gift"} />
        </div>
        <div className='Card-Wrapper'>
          <CardProps
            Title={"Holiday Deals"}
            ImgUrl1={img10}
            name1={"Home"}
            ImgUrl2={img11}
            name2={"Kitchen"}
            ImgUrl3={img12}
            name3={"Beauty"}
            ImgUrl4={img13}
            name4={"Fashion"}
            link={"See all deals"} />
        </div>

        <div className='Card-Wrapper'>
          <SingleImgCard
            Title='Shop holiday gift guides'
            ImgUrl1={img18}
            link='Explore holiday gifts'
          />
        </div>
        <div className='Card-Wrapper'>
          <CardProps
            Title={"Small business gifts"}
            ImgUrl1={img1}
            name1={"Under 10$"}
            ImgUrl2={img2}
            name2={"Under 25$"}
            ImgUrl3={img3}
            name3={"Under 50$"}
            ImgUrl4={img4}
            name4={"Handmade"}
            link={"Discover more"} />
        </div>
      </div>
    </>

  )
}

export default Card
