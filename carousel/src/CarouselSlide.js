import React from 'react'

const CarouselSlide = props => (
  <figure>
    <img src={props.imgUrl} />
    <figcaption>
      <strong>{props.description}</strong>{props.attribution}
    </figcaption>
  </figure>
)

export default CarouselSlide
