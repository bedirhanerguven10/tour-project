import React from "react";
import cardStyle from './card.module.scss';

const Card = ({data}) => {
   
   return (
    <div className={cardStyle['cardContainer']}>
        { data.map((item,index)=>{
        const {title, image, desc} = item;
      return (
      <div className={cardStyle['container']}>
        <h2>{title}</h2>
        <img className={cardStyle['imag']} src={image} alt="{title}" />
        <p className={cardStyle['desc']}>{desc}</p>
        
      </div>
    );
  })}
    </div>
   )
}
;


export default Card;
