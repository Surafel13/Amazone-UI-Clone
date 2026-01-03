import React from 'react';
import './RelatedCards.css';
import gaming from '../../Img/RelatedImg/gaming.png';
import kitchen from '../../Img/RelatedImg/kitchen.png';
import beauty from '../../Img/RelatedImg/beauty.png';
import fitness from '../../Img/RelatedImg/fitness.png';
import books from '../../Img/RelatedImg/books.png';
import toys from '../../Img/RelatedImg/toys.png';
import electronics from '../../Img/CardImg/HOL25-Peak_10620_HP_DQC_Gifting_Electronics_V1_1x_186x116._SY116_CB797242024_.jpg';
import fashion from '../../Img/CardImg/HOL25-Peak_10615_HP_DQC_Gifting_FitnessFashion_V1_1x_186x116._SY116_CB797242024_.jpg';

const RelatedCards = () => {
    const relatedData = [
        {
            title: "Elevate your gaming",
            image: gaming,
            link: "Shop gaming accessories",
            tag: "Top Rated"
        },
        {
            title: "Kitchen essentials",
            image: kitchen,
            link: "Explore kitchenware",
            tag: "Best Seller"
        },
        {
            title: "Beauty & Personal Care",
            image: beauty,
            link: "Shop beauty picks",
            tag: "Trending"
        },
        {
            title: "Fitness & Wellness",
            image: fitness,
            link: "View fitness gear",
            tag: "New Arrival"
        },
        {
            title: "Cozy Reading Nook",
            image: books,
            link: "Shop books & more",
            tag: "Editor's Choice"
        },
        {
            title: "Learning & Toys",
            image: toys,
            link: "Explore educational toys",
            tag: "For Kids"
        },
        {
            title: "Premium Electronics",
            image: electronics,
            link: "See latest tech",
            tag: "Hot Deal"
        },
        {
            title: "Fashion & Style",
            image: fashion,
            link: "Discover your style",
            tag: "Seasonal"
        }
    ];

    return (
        <div className="related-cards-container">
            <div className="related-cards-wrapper">
                <h3 className="related-section-title">Inspired by your shopping trend</h3>
                <div className="related-grid">
                    {relatedData.map((item, index) => (
                        <div key={index} className="related-card">
                            <div className="card-tag">{item.tag}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <div className="card-image-wrapper">
                                <img src={item.image} alt={item.title} className="card-image" />
                            </div>
                            <a href="#" className="card-link">{item.link}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedCards;
