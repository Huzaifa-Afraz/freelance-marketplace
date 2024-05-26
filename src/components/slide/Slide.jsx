import React from 'react'
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import { cards } from '../../data';
export default function Slide() {
  return (
    <div className="Slide">
        <div className="container">
        <Slider slidesToShow={5}>
            {cards.map(card=>(
              <CatCard item={card} key={card.id}/>
            ))}
  </Slider>
        </div>
    </div>
  )
}