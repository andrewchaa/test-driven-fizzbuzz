import React from 'react'
import CarouselButton from './CarouselButton'
import CarouselSlide from './CarouselSlide'

class Carousel extends React.PureComponent {

  state = {
    slideIndex: 0
  }

  handlePrevClick = () => {
    const { slides } = this.props
    this.setState(({ slideIndex }) => ({slideIndex: (slideIndex + slides.length - 1) % slides.length}))
  }

  handleNextClick = () => {
    this.setState(({ slideIndex }) => ({slideIndex: slideIndex + 1}))
  }

  render() {

    const { slides, ...rest } = this.props
    return (
      <div {...rest}>
        <CarouselSlide { ...slides[this.state.slideIndex]} />
        <CarouselButton data-action="prev" onClick={this.handlePrevClick}>Prev</CarouselButton>
        <CarouselButton data-action="next" onClick={this.handleNextClick}>Next</CarouselButton>
      </div>
    )
  }
}

export default Carousel
